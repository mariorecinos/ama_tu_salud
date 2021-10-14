const mongoose = require('mongoose');
const Schema = mongoose.Schema

const sugrSchema = new Schema({
  level: Number,
  date: Date,
  tags: String,
}, {timestamps: true}

)

const Sugr = mongoose.model('Sugr', sugrSchema)

module.exports = Sugr
