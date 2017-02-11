var mongoose = require('mongoose')
var CONTROLLERS = require('./controllers/setup')
var userCONTROLLER = require('./controllers/user')
var skillCONTROLLER = require('./controllers/skill')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/peopleskill')
var db = mongoose.connection

// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function () {
//   console.log('we are connected !!')
// })

//  SEEDING PROCESS
// CONTROLLERS.setup()

// CREATE NEW USER
// if user exist then not created
// userCONTROLLER.newUser('Captain America')

// CREATE USE SKILL
// if user / skill not exist then show error messsage
// skillCONTROLLER.newSkill('Captain America', 'Intelligence 60%')

// SCORING SKILL
// if user / skill not exist then show error messsage
// skillCONTROLLER.newScore('Captain America', 'Intelligence 60%', 10)

userCONTROLLER.allUser()
