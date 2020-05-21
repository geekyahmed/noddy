const express = require('express')
const path = require('path')
const config = require('./config/config')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes');
const { db: { host, port, name } } = config
const connectionString = `mongodb://${host}:${port}/${name}`
const app = express()

//Configuring Express
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))


//Configure MongoDB Database
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(response => {
    console.log('MongoDB Database Running Successfully')
  })
  .catch(err => {
    console.log('MongoDB Database Connection Failed')
  });



app.get('/api/v1', (req, res) => {
  res.send('Noddy Authentication System')
})

app.use('/api/v1/', userRoutes);

app.listen(config.app.port, (req, res) => {
  console.log(`Server Is Live At Port ` + config.app.port)
})
