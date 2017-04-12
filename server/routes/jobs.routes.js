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

jobRouter.get('/', function getAllJobs(req, res, next) {
  console.log('inside get all jobs');
      res.json(allJobs.map(function(obj) {
      return {
      id: obj.id,
      link: obj.link,
      notes: obj.notes
      };
    }));
});

jobRouter.post('/', function postNewJob(req, res, next) {
  console.log(req.body);
  res.json({
    company: 'google',
    link: 'www.google.com',
    notes: 'more awesome',
    createTime: Date.now()
  });
});


module.exports = jobRouter;
