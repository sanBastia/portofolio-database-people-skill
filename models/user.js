var mongoose = require('mongoose')
var findOrCreate = require('mongoose-findorcreate')

var Schema = mongoose.Schema

var userSchema = new Schema({
  name: String,
  skill: [{ type: Schema.Types.ObjectId, ref: 'Skill' }]
})
userSchema.plugin(findOrCreate)
var user = mongoose.model('user', userSchema)

module.exports = user
