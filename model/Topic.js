const mongoose  = require("mongoose")
const Schema = mongoose.Schema


const  topicSchema =  new Schema({
       name:{
             type:String,
             required:[true,'please add name']
       },
       
       options:[
           {
                name:String,
                count:Number
           }
       ]
})


module.exports =  mongoose.model('topic',topicSchema)