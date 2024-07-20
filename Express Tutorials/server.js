const express = require("express");
const app = express()
app.set("view engine","ejs");
app.use(logger)

app.get("/", (req, res)=>{
    console.log("Hello");
    res.render("index",{text: 'world'});
})

const userRouter =require("./routes/user")

app.use('/users', userRouter)

function logger(req,res,next) {
    console.log(req.originalUrl);
    next()
}

app.listen(3000);

