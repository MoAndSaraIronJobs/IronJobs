const jobRouter = require('express').Router();

let allJobs = [
  {
    id: '12345',
    company: 'Etsy',
    link: 'www.etsy.com',
    notes: 'awesome',
    createTime: Date.now()
  }
];
                   /**
                    * Retrieves a list of all jobs
                    * @param  {Object}   req  Must contain keys for id, company, and link
                    * @param  {Object}   res  the response
                    * @param  {Function} next
                    * @return {void}
                    */
jobRouter.get('/', function getAllJobs(req, res, next) {
  console.log('inside get all jobs');

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
