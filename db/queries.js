const db = require('./connections')




function login(username, password){
return db('users').select().where('password', password).andWhere('username', username)
}

module.exports = {
  login
}
