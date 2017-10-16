const testData = { message: 'hello' };

// These are generic methods used in the generic controllers for all models
export const controllers = {
  createOne(model, body) {
    return Promise.resolve(testData);
  },

  updateOne(docToUpdate, update) {
    return Promise.resolve(testData);
  },

  deleteOne(docToDelete) {
    return Promise.resolve(testData);
  },

  getOne(docToGet) {
    return Promise.resolve(testData);
  },

  getAll(model) {
    return Promise.resolve(testData);
  },

  findByParam(model, id) {
    return Promise.resolve(testData);
  }
};

export const createOne = model => (req, res, next) => {
  return controllers
    .createOne(model, req.body)
    .then(result => res.status(201).json(result))
    .catch(err => res.status(500).send('You broke it'));
};

export const updateOne = model => async (req, res, next) => {
  return controllers
    .updateOne(model, req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).send('error updating'));
};

export const deleteOne = model => (req, res, next) => {};

export const getOne = model => (req, res, next) => {
  return controllers
    .getOne(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
};

export const getAll = model => (req, res, next) => {
  return controllers
    .getAll(model)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
};

export const findByParam = model => (req, res, next, id) => {
  return controllers
    .findByParam(model, id)
    .then(result => next(result))
    .catch(err => res.status(500).send(err.message));
};

export const generateControllers = (model, overrides = {}) => {
  const defaults = {
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model)
  };

  return { ...defaults, ...overrides };
};
