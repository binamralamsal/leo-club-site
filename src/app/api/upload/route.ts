import { auth } from "@/lib/auth";
import dbConnect from "@/lib/db-connect";
import crypto from "crypto";
import fs from "fs/promises";
import { User } from "@/models/user";

export async function POST(request: Request) {
  const formData = await request.formData();

  const session = await auth();
  if (!session || !session.user)
    return Response.json({ error: "Not authenticated" }, { status: 401 });

  await dbConnect();

  const currentPerson = await User.findOne({ email: session.user.email });
  if (!currentPerson)
    return Response.json({ error: "Not authenticated" }, { status: 401 });

  const file = formData.get("file") as File;

  if (!file || file.size === 0) {
    return Response.json({ error: "No file uploaded" }, { status: 401 });
  }

  const hash = crypto.randomBytes(10).toString("hex");
  const fileName = `${hash}-${file.name}`;
  const uploadedFilePath = `./public/uploads/${fileName}`;

  try {
    const data = await file.arrayBuffer();
    await fs.writeFile(uploadedFilePath, Buffer.from(data));

    return Response.json(
      {
        fileURL: `/api/public/uploads/${fileName}`,
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { error: `Error occured while uploading. Please try again.` },
      { status: 401 }
    );
  }
}
