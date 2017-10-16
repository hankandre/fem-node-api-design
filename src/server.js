import express from 'express';

import { restRouter } from './api';
import { signin } from './api/modules/auth';
import { connect } from './db';
import setupMiddware from './middleware';

// Declare an app from express
const app = express();

setupMiddware(app);
connect();
// setup basic routing for index route

app.use('/api', restRouter);
app.use('/signin', signin);

// catch all
app.all('*', (req, res) => {
  res.json({ fallthrough: true });
});

export default app;
