const express = require('express')
const app = express()
const port =  3000
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const queries = require('./db/queries');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.use(cookieSession({
  name: 'g64',
  keys: ['keyboard cat'],

  maxAge: 24 * 60 * 60 * 1000
}))

app.set('view engine', 'hbs')
app.use(express.static('public'));



app.get('/', function(req,res, next){
  if(req.session.count >= 1){
    req.session.count++;
  }else {
    req.session.count = 1
  }
  console.log(req.session.count);
  res.render('index', {title: 'Express'
    })
  })

  app.post('/signedin', (req, res) => {
    var username = req.body.username
    var password = req.body.password
  queries.login(username, password)
    .then(user => {
      req.session.userInfo = user[0];
      res.render('signedin', {
        user: req.session.userInfo
      })
    })
})



app.listen(port, () => {
  console.log(`listening at ${port}`);
})
