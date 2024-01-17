const express = require('express')
const Notes = require('../models/Notes')

const router = express.Router()

router.post('/' , (req , res)=>{
  
 Notes.create({
    title: req.body.title,
    description: req.body.description,
    
    }).then(user => res.json(user));
})

module.exports = router