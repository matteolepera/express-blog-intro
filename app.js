import { log } from "console";
import { ferrariWins } from "./data.js";
import express from "express";

const app = express();
const port = 4416;

app.get("/", (req, res) => {
    res.send("Server bootstrappato by MatteoStrap")

})

app.get("/bacheca", (req, res) => {
    res.json(ferrariWins)
})

app.listen(port, () => {
    console.log(`Il server è pronto a bootstrappare sulla porta ${port} :)`)
})