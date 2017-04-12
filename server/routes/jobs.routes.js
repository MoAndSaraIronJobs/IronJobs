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
  res.json(allJobs);
});



module.exports = jobRouter;
