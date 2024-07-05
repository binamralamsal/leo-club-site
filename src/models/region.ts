import mongoose, { Document, Schema, Model } from "mongoose";
import { IUser } from "./user";

export interface IRegion extends Document {
  logo: string;
  name: string;
  clubs: mongoose.Types.ObjectId[];
  coordinator: IUser["_id"];
}

const regionSchema: Schema<IRegion> = new Schema({
  logo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  clubs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
    },
  ],
  coordinator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Region: Model<IRegion> =
  mongoose.models.Region || mongoose.model<IRegion>("Region", regionSchema);
