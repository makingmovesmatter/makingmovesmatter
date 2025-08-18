import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent model overwrite error in dev
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
