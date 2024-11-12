// models/Order.js
import mongoose from 'mongoose';

const salesSchema= new mongoose.Schema({
  customerName: String,
  items: [{ productId: String, quantity: Number }],
  totalAmount: Number,
  orderDate: Date,
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
});

export default mongoose.model('sales', salesSchema);
