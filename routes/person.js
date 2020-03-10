const express = require("express")
const  router =  express.Router()

const { 
      createPerson ,
      getPerson

    }   = require("../controllers/person")

router
    .route('/')
    .post(createPerson)

router
    .route("/:id") 
    .get(getPerson)   

module.exports =  router;