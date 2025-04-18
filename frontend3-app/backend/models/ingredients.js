import mongoose from "mongoose"

const ingredientSchema = new mongoose.Schema({
    ingredient_name: { type: String, required: true, unique: true },
    quantity_type: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true, minimize: false })

export const User = mongoose.model('Ingredient', ingredientSchema)