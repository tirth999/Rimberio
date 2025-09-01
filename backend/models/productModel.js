import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },              // Product name
    description: { type: String, required: true },       // Product description
    price: { type: Number, required: true },             // Product price
    image: { type: Array, required: true },              // Product images
    category: { type: String, required: true },          // Product category
    subCategory: { type: String, required: true },       // Product subcategory
    bestseller: { type: Boolean },                       // Whether the product is a bestseller
    date: { type: Number, required: true }               // Date the product was added (timestamp)
});

const productModel  = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
