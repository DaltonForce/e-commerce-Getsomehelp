var express = require ('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var mongoose = require('mongoose')
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

const mongoURI = 'mongodb://localhost:27017/inzks'


mongoose
  .connect(mongoURI, {useNewUrlParser: true})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

  var Users = require('./routes/Users');
  var Ans = require('./routes/Ans');

  app.use('/users', Users);
  app.use('/ans', Ans);

  app.listen(port, function () {
    console.log("server is running on port: " + port)
  })

/*

  mongoose
  .connect(mongoURI, {useNewUrlParser: true})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

  var Announs = require('./routes/Announs');

  app.use('/announs', Announs);

  app.listen(port, function () {
    console.log("server is running on port: " + port)
  })
*/
