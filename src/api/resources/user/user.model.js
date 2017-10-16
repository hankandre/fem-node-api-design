import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { promisify } from 'util';

const asyncCompare = promisify(bcrypt.compare);
const asyncHash = promisify(bcrypt.hash);

export const schema = {
  username: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  }
};

const userSchema = new mongoose.Schema(schema, { timestamps: true });

userSchema.methods = {
  authenticate(plaintTextPassword) {
    return asyncCompare(plaintTextPassword, this.password)
      .then(success => success)
      .catch(err => err);
  },
  hashPassword(plaintTextPassword) {
    if (!plaintTextPassword) {
      throw new Error('Could not save user');
    }

    const salt = bcrypt.genSaltSync(10);
    return asyncHash(plaintTextPassword, salt)
      .then(success => success)
      .catch(err => err);
  }
};

export const User = mongoose.model('user', userSchema);
