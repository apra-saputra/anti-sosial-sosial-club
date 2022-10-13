const express = require('express');
const router = require('./routes');
const app = express();
const session = require('express-session')
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))


app.use(session({
  secret: 'secret access',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    sameSite: true,
    maxAge: 60*60*1000  
  }
}))
app.use('/', router)


app.listen(port, () => {
  console.log("Aplicable Run at http://localhost:", port);
})