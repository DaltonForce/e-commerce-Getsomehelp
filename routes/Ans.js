const express = require("express")
const ans = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const An = require("../models/An")
ans.use(cors())

process.env.SECRET_KEY = 'secret'

ans.post('/addAn', (req, res) => {
  const today = new Date()
  const anData = {
    topic: req.body.topic,
    category: req.body.category,
    author: req.body.author,
    email: req.body.email,
    created: today
  }

  An.findOne({
    email: req.body.email
  })
  .then(an => {
    if(!an){
        An.create(anData)
          .then(an => {
            res.json({status: an.topic + ' Registered'})
          })
          .catch(err => {
            res.send('error: ' + err)
          })
    } else {
      res.json({ error: 'An ' + an.topic +' already exists' })
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })
})

ans.get('/addAn', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  An.findOne({
    _id: decoded._id
  })
  .then(an => {
    if(an){
      res.json(an)
    }else{
      res.send("An does not exist err 3")
    }
  })
  .catch(err =>{
    res.send('error:' + err)
  })
})

module.exports = ans
