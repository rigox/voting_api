const express = require("express")
const app = express()
const colors = require('colors')
const cors  = require("cors")
const dotenv =  require("dotenv")
const person =  require('./routes/person')


//load enviromental variables
dotenv.config({path:'./config/config.env'})


//load database
const DB =  require('./config/db')
DB()



//middleware 
app.use(cors())

app.use(express.json(), express.urlencoded())


//load  routes  
app.use('/api/v1/persons', person)



const PORT  = process.env.PORT || 5001

app.listen(PORT,()=>{
      console.log(`listening on PORT ${PORT}`.blue)
})