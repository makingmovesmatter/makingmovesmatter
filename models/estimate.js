import mongoose from 'mongoose';

const estimateSchema = new mongoose.Schema({
  estimateType: { type: String, enum: ['home', 'business'], required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  zeepcode: { type: String, required: true },
  moveDate: { type: Date, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String },
  status: { type: String, default: 'pending'},
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Estimate || mongoose.model('Estimate', estimateSchema);