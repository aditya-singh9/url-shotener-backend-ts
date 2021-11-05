import mongoose, { Document, mongo } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890", 6);

export interface ShortURL extends Document {
  shortId: string;
  destination: string;
}

const schema = new mongoose.Schema({
  shortId: {
    types: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  destination: { type: String, required: true },
});

const shortUrl = mongoose.model<ShortURL>("shortUrl", schema);

export default shortUrl;
