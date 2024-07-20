const express = require('express');
const app = express();
const port = 5000;

//const users = require("./Data/users");
const userRoutes = require("./routes/userRoutes")
const postRoutes =require("./routes/postRoutes")
//const posts = require("./Data/posts"); 
const bodyParser = require("body-parser") //post and patch
//middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))

app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)

app.get("/", (req, res) => {
    res.send("Home Route");
});
app.use((req, res)=>{
   res.status(404)
   res.json({error:"Resources not Found"})
})

// Server listening on port 5000
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
