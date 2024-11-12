// models/Inventory.js
import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  itemName: String,
  quantity: Number,
  price: Number,
  supplier: String,
  lastRestocked: Date,
});

export default mongoose.model('Inventory', inventorySchema);
