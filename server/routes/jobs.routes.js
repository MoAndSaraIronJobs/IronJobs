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
/**
* Creates a new object containing only specific keys
* @param  {Object} job The original object containing all keys
* @return {Object}     The new object containing only some keys
*/
    res.json(allJobs.map(function(job) {
      return {
        id: job.id,
        link: job.link,
        notes: job.notes
      };
    }));
  })
  .catch(function handleErrors(err) {
    let theError = new Error('Could not get all jobs');
    theError.status = 422;
    return next(theError);
  });
});
/**
 * Retrieves a single job by the object ID
 * @param  {Object}   req  must contain a body like {foundJob: 999 id number}
 * @param  {Object}   res  Contains the found job id number
 * @param  {Function} next
 * @return {Object}        Contains the id number for one job
 */
jobRouter.get('/:id', function getSingleJob(req, res, next) {
  Job.findById(req.params.id)
    .then(function sendSingleJob(job) {
      res.json({foundJob: req.params.id});
    })
    .catch(function handleErrors(err) {
      let theError = new Error('Could not find this job');
      theError.status = 404;
      return next(theError);
    });
});

/**
 * Adds a new job
 * @param  {Object}   req  must have body like {company: 'google', link: 'www.google.com', notes: 'more awesome'}
 * @param  {Object}   res  contains a confirmation message that the job has been posted
 * @param  {Function} next
 * @return {void}
 */
jobRouter.post('/', function postNewJob(req, res, next) {
  // TODO: add data audits for lack of required fields
  console.log(req.body);

  let newJob = new Job( {
    company: 'google',
    link: 'www.google.com',
    notes: 'more awesome',
    createTime: Date.now()
  });

  newJob.save()
    .then(function sendResponse(data) {
      res.json({message: 'Your job has been posted!'});
    })
    .catch(function handleErrors(err) {
      let theError = new Error('Could not post a new job');
     theError.status = 422;
     return next(theError);
    });
});

/**
 * Deletes a job posting
 * @param  {Object}   req  The job to be deleted
 * @param  {Object}   res  Contains a confirmation message that the job has been deleted
 * @param  {Function} next
 * @return {void}
 */
jobRouter.delete('/:id', function deleteJob(req, res, next) {
  Job.findById({_id: req.params.id})
    .then(function deleteAJob(job) {
      // TODO: error handling
      Job.remove(function deletion(err, job) {
        res.json({message: 'This job has been deleted'});
      });

    })
    .catch(function handleErrors(err) {
      let theError = new Error('Could not delete this job');
      theError.status = 500;
      return next(theError);
    });
});


module.exports = jobRouter;
