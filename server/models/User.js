import mongoose from "mongoose";

// Use consistent, lowercase field names. Make email required + unique.
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);