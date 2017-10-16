import mongoose from 'mongoose';

export const schema = {
  title: {
    type: String,
    required: [true, 'This is a playlist title error']
  },
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'song'
    }
  ],
  favorite: {
    type: Boolean,
    required: true,
    default: false
  }
};

const playlistSchema = new mongoose.Schema(schema);

export const Playlist = mongoose.model('playlist', playlistSchema);
