const jobRouter = require('express').Router();

const Job = require('../models/Job.model.js');
/**
* Retrieves a list of all jobs
* @param  {Object}   req  Must contain keys for id, company, and link
* @param  {Object}   res  the response
* @param  {Function} next
* @return {void}
*/
jobRouter.get('/', function getAllJobs(req, res, next) {

  Job.find()
  .then(function sendAllJobs(allJobs) {
    if(!Array.isArray(allJobs)) {
      let err = new Error('allJobs is no longer an array');
      err.status = 500;
      return next();
    }

    res.json(allJobs.map(function(obj) {
      return {
        id: obj.id,
        link: obj.link,
        notes: obj.notes
      };
    }));
  })
  .catch(function handleErrors(err) {
    let theError = new Error('Could not get all jobs');
    theError.status = 422;
  });
});

jobRouter.post('/', function postNewJob(req, res, next) {
  // TODO: add data audits for lack of required fields
  console.log(req.body);
  res.json({
    company: 'google',
    link: 'www.google.com',
    notes: 'more awesome',
    createTime: Date.now()
  });
});


module.exports = jobRouter;
