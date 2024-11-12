// routes/hr.js
import express from 'express';
import Employee from '../models/Employee.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add employee' });
  }
});

router.get('/', authenticateToken, async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update employee' });
  }
});

router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete employee' });
  }
});

export default router;
