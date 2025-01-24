import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

let UserModal = mongoose.model("user", userSchema);

export default UserModal;
