import mongoose, { Document, Schema, Model } from "mongoose";
import { IUser } from "./user";

export interface IClub extends Document {
  name: string;
  logo: string;
  description: string;
  president: IUser["_id"];
}

const clubSchema: Schema<IClub> = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  logo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  president: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Club: Model<IClub> =
  mongoose.models.Club || mongoose.model<IClub>("Club", clubSchema);
