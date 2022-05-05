import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    lowercase: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = model("user", userSchema);
