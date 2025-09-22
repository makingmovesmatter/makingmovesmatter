import mongoose from "mongoose";

const ipAttemptSchema = new mongoose.Schema({
  ip: { type: String, required: true, unique: true },
  attempts: { type: Number, default: 0 },
  lockUntil: { type: Date, default: null },
});

export default mongoose.models.IPAttempt || mongoose.model("IPAttempt", ipAttemptSchema);
