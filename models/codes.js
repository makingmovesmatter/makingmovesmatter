
import mongoose from 'mongoose';

const CodeInjectionSchema = new mongoose.Schema({
  codeInjections: [{
    id:{type:String},
    name: { type: String, required: true },
    code: { type: String, required: true },
    type: { type: String, enum: ['header', 'body'], default: 'header' },
    position: { type: String, default: 'beforeend' },
    enabled: { type: Boolean, default: true },
    targetPages: { type: String, enum: ['all', 'specific', 'exclude'], default: 'all' },
    pagesList: [{ type: String }],
    createdAt: { type: Date, default: Date.now }
  }],
  modes: {
    darkMode: { type: Boolean, default: false },
    maintenanceMode: { type: Boolean, default: false },
    debugMode: { type: Boolean, default: false },
    customModes: { type: Map, of: mongoose.Schema.Types.Mixed, default: {} }
  },
  injectionSettings: {
    globalEnabled: { type: Boolean, default: true },
    defaultPosition: { type: String, default: 'beforeend' }
  }
}, {
  timestamps: true
});

export default mongoose.models.Settings || mongoose.model('Settings', CodeInjectionSchema);