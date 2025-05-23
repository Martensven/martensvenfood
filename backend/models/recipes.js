import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    recipe_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true, minimize: false })

export const User = mongoose.model('User', userSchema)