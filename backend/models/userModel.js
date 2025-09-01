import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },              // User's name
    email: { type: String, required: true, unique: true }, // User's email (unique)
    password: { type: String, required: true },           // User's password
    cartData: { type: Object, default: {} }               // Cart data to store user's cart items
}, { minimize: false }); // To ensure empty objects are not removed automatically

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;
