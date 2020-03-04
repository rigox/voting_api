const express = require("express")
const app = express()
const colors = require('colors')


//load database
const DB =  require('./config/db')
DB()






const PORT  = process.env.PORT || 5001

app.listen(PORT,()=>{
      console.log(`listening on PORT ${PORT}`.blue)
})