const jobRouter = require('express').Router();

let allJobs = [
  {
    "id": "12345",
    "company": "Etsy",
    "link": "www.etsy.com",
    "notes": "awesome",
    "createTime": "12:34"
  }
];

jobRouter.get('/', function functionName() {

});



module.exports = jobRouter;
