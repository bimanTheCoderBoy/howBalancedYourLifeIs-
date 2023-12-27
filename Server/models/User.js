// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mail:{
    type:String,
    required:true,
    unique:true
  },
  password: {
    type: String,
    required: true,
    },
// lifeTests:{
//     type:[mongoose.Schema.Types.ObjectId],
//     ref:"LifeTest"
// }
});

const User = mongoose.model('User', userSchema);

module.exports = User;