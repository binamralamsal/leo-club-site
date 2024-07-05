import { auth } from "@/lib/auth";
import dbConnect from "@/lib/db-connect";
import { User } from "@/models/user";
import { cache } from "react";

export const getLoggedInUser = cache(async function () {
  const session = await auth();
  await dbConnect();

  if (!session) return { session, user: null };

  const user = await User.findOne({ email: session.user?.email });

  return { session, user };
});
