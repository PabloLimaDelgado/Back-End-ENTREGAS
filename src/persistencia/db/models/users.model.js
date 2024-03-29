import mongoose, { Schema, model } from "mongoose";

const usersSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Carts",
  },
  fromGoogle: {
    type: Boolean,
    default: false,
  },
  rol: {
    type: String,
    enum: ["admin", "user", "premium"],
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

export const usersModel = model("Users", usersSchema);
