const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("user controller");
const userModel = require("../models/userModels").users;
const request = require('request');









/**Get users from randome user and save into it database */
async function getUsers(req, res) {
  logger.info('users summmery');
  const options = {
    url: 'https://randomuser.me/api/',
    method: 'GET',
  };
  return new Promise(function (resolve, err) {
    request.get(options, async function (err, resp, body) {
      if (err) {
        res.send('failed to fetch user,please try again !');
      } else {
        var myJSON = JSON.parse(body);
        const reqBody = myJSON.results[0];
        const reseult = await userModel(reqBody).save();
        res.send(reseult)
      }
    })
  })
}





/**Get Male Report based  */
async function getMaleReport(req, res) {
  userModel.aggregate([
    { $match: { "gender": "male" } },
    {
      $group: {
        _id: "$nat",
        "0-30": {
          $sum: {
            $cond: [
              { $and: [{ $gte: ["$dob.age", 0] }, { $lt: ["$dob.age", 30] }] },
              1,
              0
            ]
          }
        },
        "30-50": {
          $sum: {
            $cond: [
              { $and: [{ $gte: ["$dob.age", 30] }, { $lt: ["$dob.age", 50] }] },
              1,
              0
            ]
          }
        },
        "50plus": { $sum: { $cond: [{ $gte: ["$dob.age", 50] }, 1, 0] } }
      }
    }
  ]).then((result) => {
    if (result) {
      res.send(result)
    } else {
      res.send('error is there');
    }
  })
}




/** Get Female report */
async function getFemaleReport(req, res){
  userModel.aggregate([
    { $match: { "gender": "female" } },
    {
      $group: {
        _id: "$nat",
        "0-30": {
          $sum: {
            $cond: [
              { $and: [{ $gte: ["$dob.age", 0] }, { $lt: ["$dob.age", 30] }] },
              1,
              0
            ]
          }
        },
        "30-50": {
          $sum: {
            $cond: [
              { $and: [{ $gte: ["$dob.age", 30] }, { $lt: ["$dob.age", 50] }] },
              1,
              0
            ]
          }
        },
        "50plus": { $sum: { $cond: [{ $gte: ["$dob.age", 50] }, 1, 0] } }
      }
    }
  ]).then((result) => {
    if (result) {
      res.send(result)
    } else {
      res.send('error is there');
    }
  })
}





/** export modules */
module.exports.getUsers = getUsers;
module.exports.getMaleReport = getMaleReport;
module.exports.getFemaleReport =getFemaleReport;