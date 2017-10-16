export const apiErrorHandler = (error, req, res, next) => {
  console.log(error.message);
  res.status(502).json({ error: error.description });
};
