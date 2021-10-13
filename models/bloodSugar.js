const mongoose = require('mongoose');
const Schema = mongoose.Schema

const sugrSchema = new Schema({
  level: Number,
  date: Date,
}, {timestams: true}

)

const Sugr = mongoose.model('Sugr', sugrSchema)

module.exports = Sugr
