const express = require("express");
const app = express();

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

function auth(req, res, next) {
    if (req.query.admin === "true") {
        req.admin = true;
        next();
        return
    } 
        res.send("no auth");
    }


app.use(logger);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/users", auth, (req, res) => {
    console.log(`User is admin = ${req.admin}`);
    console.log("Users Page");
    res.send("Users Page");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
