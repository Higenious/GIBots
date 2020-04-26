const mongoose =  require('mongoose');
const timestamps = require('mongoose-timestamp');
mongoose.Promise = Promise;
const Schema = mongoose.Schema;


let users = new Schema({
  gender : {type:String},
  title : {
                title: {type:String},
                first: {type:String},
                last: {type:String}
  },
  location : {

      street: {
          number: {type:Number},
          name: {type:String}
      },
      city: {type:String},
      state: {type:String},
      country: {type:String},
      postcode: {type:String},
      coordinates: {
          latitude: {type:Number},
          longitude: {type:Number},
      },
      timezone: {
          offset: {type:String},
          description: {type:String}
      }
  },
  email: {type:String},
  login: {
                  uuid: {type:String},
                  username: {type:String},
                  password: {type:String},
                  salt: {type:String},
                  md5: {type:String},
                  sha1: {type:String},
                  sha256: {type:String}
              },
              dob: {
                  date: {type:Date},
                  age: {type:Number}
              },
              registered: {
                 date: {type:Date},
                 age: {type:Number}
              },
              phone: {type:String},
              cell: {type:String},
              picture: {
                  large: {type:String},
                  medium: {type:String},
                  thumbnail: {type:String}
              },
          nat: {type:String}
         
});users.plugin(timestamps);






/**exporting modules */
module.exports.users = mongoose.model('users', users);
