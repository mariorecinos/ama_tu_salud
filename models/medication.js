const mongoose = require('mongoose');
const Schema = mongoose.Schema

const medSchema = new Schema({
  name: String,
  dose: String,
  inst: String,
}

)

const Med = mongoose.model('Med', medSchema)

module.exports = Med
