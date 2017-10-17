import { Song } from './song.model';

const getSong = (_, { id }, { user }) => {
  return Song.findById(id).exec();
};

const allSongs = () => {
  return Song.find({}).exec();
};

const createSong = (...args) => {
  const { input } = args[1];
  return Song.create(input);
};

const updateSong = (...args) => {
  const { input } = args[1];
  return Song.findByIdAndUpdate(input.id, input);
};

export const songResolvers = {
  Query: {
    allSongs,
    Song: getSong
  },
  Mutation: {
    createSong,
    updateSong
  }
};
