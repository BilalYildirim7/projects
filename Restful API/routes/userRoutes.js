
const express = require("express")
const router = express.Router()

const users= require("../Data/users")
// index routes - Listing all users
router.get("/", (req, res) => {
    res.json(users);
});
//New - GET -show a form

//Create  - post - Create a new user
 router.post("/", (req, res)=>{
   if(req.body.name&&req.body.username&&req.body.email){
    if(users.find((u) => u.username==req.body.username)){
        res.json({error:" Username is already taken"
        })
        return
   }
   const user ={
    id:users[users.length -1].id + 1,
    name:req.body.name,
    username:req.body.username,
    email:req.body.email
};
users.push(user)
res.json(user)
} else {
    res.json({error: " insufficienct data"})
}

 })
// Get individual user
router.get("/:id", (req, res, next) => { // Corrected res object
    const user = users.find((user) => user.id == req.params.id);
    if (user) {
        res.json(user);
    } else next()
});

// Update - PATCH - update a user (id)
router.patch("/:id", (req, res, next)=>{
    const user =users.find((user, i)=>{
        if(user.id ===+req.params.id){
            for(const key in req.body){
               users[i][key]=req.body[key]
            }
            return true
        }
    })
    if(user) res.json(user)
        else next()

})

// DELETE - Delete 
router.delete("/:id", (req, res,next)=>{
  const user = users.find((user,i)=>{
    if(user.id ===+req.params.id){
        users.splice(i, 1)
        return true
    }
   
  })
  if(user) res.json(user)
    else next()
})

module.exports=router