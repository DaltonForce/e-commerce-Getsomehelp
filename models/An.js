const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AnSchema = new Schema ({
  topic: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = An = mongoose.model('ans', AnSchema)
