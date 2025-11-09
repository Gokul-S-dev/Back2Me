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
                               //Collection Name
export default mongoose.model("User", userSchema);
                                        //Schema Name is defined above