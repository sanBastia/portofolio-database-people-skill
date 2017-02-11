var skillMODEL = require('../models/skill')
var userMODEL = require('../models/user')
var findOrCreate = require('mongoose-findorcreate')

module.exports = {
  newSkill: function (value_name, value_skill) {
    let skill_new = {
      skill: value_skill
    }

    userMODEL.find({name: value_name}, function (err, user) {
      if (user.length == 0) console.log(`${value_name} doesn't exist !`)

      if (user.length) {
        skillMODEL.findOrCreate(skill_new, function (err, skill, created) {
          if (err) throw err
          if (!created) console.log(`${value_skill} already exist`)
          if (created) {
            user[0].skill.push(skill._id)
            user[0].save(function (err) {
              if (err) console.log(err)
            })
            console.log(`${value_name} had a new ${value_skill} !`)
          }
        })
      }
    })
  },
  newScore: function (value_name, value_skill, value_score) {
    userMODEL.find({name: value_name}, function (err, user) {
      if (user.length == 0) console.log(`${value_name} doesn't exist !`)

      if (user.length) {
        skillMODEL.find({skill: value_skill}, function (err, skill) {
          if (skill.length == 0) console.log(`${value_skill} doesn't exist !`)
          if (skill.length) {
            skill[0].score = value_score
            skill[0].save(function (err) {
              if (err) console.log(err)
            })
            console.log(`${value_name} had a new score : ${value_score} for skill ${value_skill}  !`)
          }
        })
      }
    })
  }
}
