import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    recipe_name: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: String, required: true },
}, { timestamps: true, minimize: false })

export const Recipe = mongoose.model('Recipe', recipeSchema)