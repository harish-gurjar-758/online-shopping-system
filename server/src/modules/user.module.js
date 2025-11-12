import mongoose from "mongoose";

// Define User Schema
const userSchema = new mongoose.Schema(
    {
        userType: {
            type: String,
            enum: ["customer", "Seller"],
            required: true,
            default: "customer",
        },
        userName: {
            type: String,
            required: [true, "User name is required"],
            trim: true,
        },
        userEmail: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        userPhone: {
            type: String,
            required: [true, "Phone number is required"],
            trim: true,
        },
        userPassword: {
            type: String,
            required: [true, "Password is required"],
            minlength: 6,
        },
        userLocation: {
            type: String,
            default: "Not Provided",
        },
    },
    { timestamps: true }
);

// Create and export model
const User = mongoose.model("User", userSchema);
export default User;