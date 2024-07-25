// Fruits CRUD Routes
const express = require('express')
const router =express.Router()
//const Fruit=require('../models/user')
const User = require('../models/user')

// index - GET
router.get('/', async (req, res)=>{
    try {
        const allUsers = await User.find({})
    res.json(allUsers)
    } catch (error) {
        res.status(500).json({msg:'something went wrong'})
        console.error(error.message)
    }
})

//Show - GET- Individual 
router.get('/:id', async (req, res)=>{
  const oneFruit = await User.findById(req.params.id)
  res.json(oneFruit)
})

//Create - Post
router.post('/', async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ errors: error.errors });
      }
      res.status(500).json({ msg: 'Something went wrong' });
      console.error(error.message);
    }
  });

//Update - PUT/PATCH
router.put("/:id", async (req, res)=>{
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body)
    res.json(updateUser)
})  
//destroy - DELETE 
router.delete("/:id", async (req, res)=>{
    const deleteUser = await User.findByIdAndDelete(req.params.id)
    res.json(deleteUser)
})


module.exports=router