"use server";

import { signIn } from "@/lib/auth";
import dbConnect from "@/lib/db-connect";
import { Region } from "@/models/region";
import { IUser, User } from "@/models/user";
import { regionSchema } from "@/validators/region.schema";
import { registerSchema } from "@/validators/user.schema";
import { genSalt, hash } from "bcryptjs";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function signInUser(person: { email: string; password: string }) {
  try {
    await signIn("credentials", { ...person, redirect: false });
    return { message: "Signed in Successfully" };
  } catch (err) {
    return {
      error: "Invalid email or password.",
    };
  }
}

export async function registerUser(userDetails: {
  email: string;
  password: string;
  name: string;
  role?: "district" | "user";
}) {
  const parsedBody = registerSchema.safeParse(userDetails);

  if (!parsedBody.success) {
    return {
      status: "ERROR",
      message: "Validation Error Occurred",
      error: parsedBody.error,
    };
  }

  const { data } = parsedBody;

  await dbConnect();
  const person = await User.findOne({ email: data.email });

  if (person)
    return {
      status: "ERROR",
      message:
        "User with the email address already exists. If you used google login then please login with google!",
    };

  const salt = await genSalt(12);
  data.password = await hash(data.password, salt);
  await User.create(data);

  return {
    message: "User registered successfully",
    status: "OK",
  };
}

export async function createRegion({
  coordinatorEmail,
  coordinatorName,
  coordinatorPassword,
  ...data
}: z.infer<typeof regionSchema>) {
  await dbConnect();

  try {
    const user = await User.findOne({ email: coordinatorEmail });
    if (user)
      return {
        error:
          "User with that email address already exists. Please enter a different email address.",
      };

    const coordinator = await User.create({
      email: coordinatorEmail,
      name: coordinatorName,
      password: coordinatorPassword,
    });

    const region = await Region.findOne({ name: data.name });
    if (region)
      return {
        error:
          "Region with that name already exists, Please enter a different region name.",
      };

    await Region.create({
      ...data,
      coordinator: coordinator._id,
    });

    revalidatePath("/district-dashboard");

    return { message: "Region created successfully" };
  } catch (err) {
    console.log(err);
    return { error: "Unable to create region, please try again." };
  }
}

export async function findUserByName(name: string) {
  try {
    const users = (await User.aggregate([
      {
        $match: {
          name: {
            $regex: name,
            $options: "i",
          },
        },
      },
      {
        $project: {
          value: "$_id",
          name: "$name",
        },
      },
    ])) as { name: string; value: mongoose.Types.ObjectId }[];

    return users.map((user) => ({
      value: user.value.toString(),
      name: user.name,
    }));
  } catch {
    return [];
  }
}
