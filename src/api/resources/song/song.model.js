import mongoose from 'mongoose';

export const schema = {
  title: {
    type: String,
    required: [true, 'This is an error']
  },
  url: {
    unique: true,
    type: String,
    required: [true, 'This is an error']
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
