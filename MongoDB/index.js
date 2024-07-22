require('dotenv').config()
const express = require("express")
const app = express()
const PORT=process.env.PORT
const conn=require('./db/conn')
const fruitRoutes=require('./routes/fruits')
const Fruit = require('./models/fruit')
const starterFruits = require('./db/seed')
conn()
//View Engine
app.set('view', __dirname + '/views');
app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());
//Middleware
app.use(express.json()) //be able to use req.body
app.use('/api/fruits', fruitRoutes)

//Routes 
app.get('/',(req,res)=>{
    res.send('Home route')
})
app.get('/fruits/seed', async(req, res)=>{
   try {
    await Fruit.deleteMany({})
    await Fruit.create(starterFruits)
     res.json(starterFruits)
    
   } catch (error) {
      console.log(`Someting went wrong loading seed data ${error.message}`)
   }
})





app.listen(PORT, ()=>{
    console.log(`Server is runnning on port:${PORT}`)
})