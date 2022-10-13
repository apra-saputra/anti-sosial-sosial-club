const express = require("express");
const app = express()
const router = require('./routes')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(router)

// app.get('/',(req,res)=>{
//     res.render('homepage')
// })

app.listen(3000,()=>{
    console.log('listening port 3000')
})