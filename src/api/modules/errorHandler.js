import fs from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);

export const apiErrorHandler = (error, req, res, next) => {
  return writeFile(resolve(__dirname, '../../../error.log'), error.stack, {
    encoding: 'utf8'
  })
    .then(err => {
      res.status(502).json({ error: error.message || err });
    })
    .catch(err => res.status(502).json({ error: err }));
  // console.log(error.stack);
  // res.status(502).json({ error: error.message } || JSON.stringify(error));
};
