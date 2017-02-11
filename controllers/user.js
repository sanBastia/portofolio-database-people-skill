var userMODEL = require('../models/user')

module.exports = {
  newUser: function (value) {
    let user_new = {
      name: value
    }
    userMODEL.findOrCreate(user_new, function (err, user, created) {
      if (err) throw err
      if (user) console.log(`${value} Already exist !`)
      if (created) console.log(`${value} Added !`)
    })
  },
  allUser: function () {
    userMODEL.find().populate('skill')
      .exec(function (err , user) {
        if (user)

          for (let i = 0;i < user.length;i++) {
            console.log(`Heroes = ${user[i].name}`)
            console.log('-------------------------')
            console.log('SKILL')
            for (let j = 0;j < user[i].skill.length;j++) {
              let score = user[i].skill[j].score ? user[i].skill[j].score : 'still not scored by HEROES !'
              console.log(`${j+1}. ${user[i].skill[j].skill} - Score : ${score}`)
              console.log('\n')
            }
        }
      })
  }
}
