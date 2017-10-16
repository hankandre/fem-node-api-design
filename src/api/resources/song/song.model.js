import mongoose from 'mongoose';

export const schema = {
  title: {
    type: String,
    required: []
  },
  url: {
    type: String,
    unique: true,
    required: []
  },
  album: {
    type: String
  },
  artist: {
    type: String
  },
  rating: {
    type: Number
  },
  favorite: {
    type: Boolean
  }
};

const songSchema = new mongoose.Schema(schema);

export const Song = mongoose.model('song', songSchema);
