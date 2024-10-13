import mongoose, { Schema } from 'mongoose';

const artistSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  artistId: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
  },
  metadata: {
    type: Object,
    required: true,
  }
}, { timestamps: true });


export const Song = mongoose.model('Song', songSchema);