import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },         // ID of the user placing the order
    items: { type: Array, required: true },           // Array of items being ordered
    amount: { type: Number, required: true },         // Total amount of the order
    address: { type: Object, required: true },        // Shipping address
    status: { type: String, required: true, default: 'Order Placed' }, // Order status
    paymentMethod: { type: String, required: true },  // Payment method (e.g., COD, Razorpay)
    payment: { type: Boolean, required: true, default: false }, // Whether the payment was successful
    date: { type: Number, required: true }            // Order date (timestamp)
});

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
export default orderModel;
