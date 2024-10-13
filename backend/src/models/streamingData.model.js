import mongoose, { Schema } from 'mongoose';

const streamingDataSchema = new mongoose.Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
  songId: {
    type: Schema.Types.ObjectId,
    ref: 'Song',
  },
  streamingCount: {
    type: Number,
    default: 0,
  },
  retentionRate: {
    type: Number,
    default: 0,
  }
}, { timestamps: true });

export const StreamingData = mongoose.model('StreamingData', streamingDataSchema);