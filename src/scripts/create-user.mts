import dbConnect from "../lib/db-connect";
import { registerUser } from "../services/user/actions";

await dbConnect();

await registerUser({
  email: "binamralamsal@gmail.com",
  name: "Binamra Lamsal",
  password: "binamra1234",
  role: "district",
});

process.exit(0);
