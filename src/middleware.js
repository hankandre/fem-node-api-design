import bodyParser from 'body-parser';

import { apiErrorHandler } from './api/modules/errorHandler';

const setGlobalMiddleware = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(apiErrorHandler);
};

export default setGlobalMiddleware;
