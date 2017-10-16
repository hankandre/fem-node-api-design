import bodyParser from 'body-parser';

const setGlobalMiddleware = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};

export default setGlobalMiddleware;
