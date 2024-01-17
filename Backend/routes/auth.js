const express = require('express')
const User = require('../models/User')
const {body , validationResult} =  require('express-validator')
const bcrypt = require('bcryptjs');

const router = express.Router()

router.post('/' , [
  body('email' , 'Enter the valid email').isEmail(),
  body('name' , 'Enter the valid name').isLength({min : 3}),
  body('password' , 'password must be 5 characters or more').isLength({min : 5})
] ,async (req , res)=>{
 
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await  bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password , salt)
    User.create({
    name: req.body.name,
    email: req.body.email,
    password: secPass,
    }).then(user => res.json(user));
  },
);

  


module.exports = router