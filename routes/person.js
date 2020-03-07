const express = require("express")
const  router =  express.Router()

const { 
      createPerson
}   = require("../controllers/person")

router
    .route('/')
    .post(createPerson)

module.exports =  router;