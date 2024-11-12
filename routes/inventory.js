// routes/inventory.js
import express from 'express';
import Inventory from '../models/Inventory.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Create new inventory item
router.post('/', authenticateToken, async (req, res) => {
  try {
    const item = new Inventory(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create inventory item' });
  }
});

// Get all inventory items
router.get('/', authenticateToken, async (req, res) => {
  const items = await Inventory.find();
  res.json(items);
});

// Update inventory item
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const item = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update item' });
  }
});

// Delete inventory item
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete item' });
  }
});

export default router;
