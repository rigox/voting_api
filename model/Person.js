const mongoose =  require("mongoose")
const Schema =   mongoose.Schema


const personSchema =  new Schema({
       name:{
            type:String,
            required:[true,'please add name']
       },
       age:{
            type:String,
            required:[true,'pleaese add your age']
       },
       sex:{
            type:String
       },
       photo_url:{
            type:String,
            default:"None"
       }
        
       
})


module.exports =  mongoose.model('Persons',personSchema)
