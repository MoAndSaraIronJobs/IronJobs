module.exports = function errorHandler(err, req, res, next) {
  console.error('Oops! The page you are looking for does not exist.', err.message);
  res.status(err.status || 404);
  res.json({message: err.message});
};
