var skillMODEL = require('../models/skill')
var userMODEL = require('../models/user')

module.exports = {
  setup: function () {
    let skill = [{
      skill: 'spider sense',
      score: 10
    }, {
      skill: 'spider web shot',
      score: 9
    }, {
      skill: 'spider heal',
      score: 7
    }]

    skillMODEL.create(skill)
      .then(function (data) {
        let arr = []
        for (let i = 0; i < data.length;i++) {
          arr.push(data[i]._id)
        }
        let user = {
          name: 'spiderman',
          skill: arr
        }
        userMODEL.create(user).then(function (user) {
          if (user)
            console.log('User Seeded !')
        }).catch(function (err) {
          if (err) throw err
        })
      }).catch(function (err) {
      if (err) throw err
    })
  },

  help: function () {
    console.log('#################')
    console.log('HEROES LEGACY !!')
    console.log('1. CONTROLLERS.setup() - for Seeding heroes !')
    console.log('2. userCONTROLLER.newUser(newheroes) - for Creating new heroes !')
    console.log('3. skillCONTROLLER.newSkill(heroes,newskill) - for adding skill to heroes !')
    console.log('4. skillCONTROLLER.newScore(heroes,newskill,newscore) - for adding skill to heroes !')
    console.log('5. userCONTROLLER.allUser() - for showing all user and score')
  }
}
