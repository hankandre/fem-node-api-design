import express from 'express';

// Declare an app from express
const app = express();

app.all('*', (req, res) => {
  res.json({ ok: true });
});

export default app;
