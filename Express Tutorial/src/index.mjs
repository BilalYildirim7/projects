import express from 'express';

const app = express();

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`)
});
app.get("/hello", (req, res) => {
    res.send("Hello Express!");
  });
  
  app.get("/express", (req, res) => {
    res.sendFile(__dirname + "/index.mjs");
  });
  app.post("/user", (req, res) => {
    res.send("Received a POST request for user!");
  });
app.get("/profile/:id", (req,res)=> {
  res.send("You have requested id of"+ req.params.id)
})