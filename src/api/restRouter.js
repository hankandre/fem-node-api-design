import express from 'express';

import { apiErrorHandler } from './modules/errorHandler';
import { playlistRouter } from './resources/playlist';
import { songRouter } from './resources/song';
import { userRouter } from './resources/user';

export const restRouter = express.Router();
restRouter.use((req, res, next) => next(new Error('Ooops!')));
restRouter.use('/user', userRouter);
restRouter.use('/song', songRouter);
restRouter.use('/playlist', playlistRouter);
restRouter.use(apiErrorHandler);
