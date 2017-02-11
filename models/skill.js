var mongoose = require('mongoose')
var findOrCreate = require('mongoose-findorcreate')
var Schema = mongoose.Schema

var skillSchema = new Schema({
  skill: String,
  score: Number
})
skillSchema.plugin(findOrCreate)
var skill = mongoose.model('Skill', skillSchema)

module.exports = skill
