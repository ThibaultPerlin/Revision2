//instance de express
const express = require("express");
const app = express();

const port = 5500;

const route = require("./Routes/routes")

/*app.get("/", (req, res)=>{
    res.status(200).json({"body": "Bienvenue sur mon API DraftNBA"});
})*/

app.use("/api", route);




app.listen(5500, console.log("server is running ..."));
