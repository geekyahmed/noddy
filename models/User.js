const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  username: {
    type: String,
  },
  tagline: {
    type: String
  },
  bio: {
   type: String
 },
city: {
  type: String
},
country: {
  type: String
},
tags: {
type: Array
},
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('users', UserSchema)
