import express from 'express';

import { playlistRouter } from './resources/playlist';
import { songRouter } from './resources/song';
import { userRouter } from './resources/user';

export const restRouter = express.Router();
restRouter.use('/user', userRouter);
restRouter.use('/song', songRouter);
restRouter.use('/playlist', playlistRouter);
