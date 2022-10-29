import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
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
    phone: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// const User = mongoose.model("User", userSchema);

export default mongoose.models.User || mongoose.model("User", userSchema);
