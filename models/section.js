const mongoose = require('mongoose')

const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  floor: {
    type: String,
    required: true
  },
  buildingUnit: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Section', sectionSchema)