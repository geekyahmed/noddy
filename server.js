const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const Users = require('./routes/Users')
const config = require('./config/config')
const { db: mongoDbUrl } = config
const connectionString = mongoDbUrl

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then()