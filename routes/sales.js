// routes/sales.js
import express from 'express';
import Order from '../models/Sales.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create order' });
  }
});

router.get('/', authenticateToken, async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update order' });
  }
});

router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: 'Order deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete order' });
  }
});

export default router;
