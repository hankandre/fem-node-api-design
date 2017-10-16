import mongoose from 'mongoose';

export const schema = {
  title: {
    type: String,
    required: []
  },
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'song'
    }
  ],
  favorite: {
    type: Boolean,
    default: false,
    required: true
  }
};

const playlistSchema = new mongoose.Schema(schema);

export const Playlist = mongoose.model('playlist', playlistSchema);
