import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  failedAttempts: { type: Number, default: 0 },
  lockUntil: { type: Date, default: null },

  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },

  // IP tracking
  ipAttempts: {
    type: Map,        // Map<IP, { attempts: Number, lastAttempt: Date }>
    of: new mongoose.Schema({
      attempts: { type: Number, default: 0 },
      lastAttempt: { type: Date, default: Date.now }
    }),
    default: {}
  },
  verifiedIPs: { type: [String], default: [] },
  }, { timestamps: true }
);


export default mongoose.models.User || mongoose.model('User', userSchema);