const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')

const routes = require('./routes')


const app = express()
app.set('port',process.env.PORT || 9000)
const dbOptions = {
    host:'us-cdbr-east-06.cleardb.net',
    port:3306,
    user:'be2c22917bae43',
    password:'944e5079',
    database:'heroku_819501358f8d9a6'
}

//middleware------------------------------------
app.use(myconn(mysql,dbOptions,'single'))

//routes----------------------------------------
app.get('/',(req,res)=>{
    res.send('Welcome to my API')
})
app.use('/api',routes)


// server running-------------------------------
app.listen(app.get('port'),()=>{
    console.log('server running on port',app.get('port'))
})