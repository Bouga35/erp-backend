// models/Employee.js
import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  salary: Number,
  hireDate: Date,
  department: String,
});

export default mongoose.model('Employee', employeeSchema);
