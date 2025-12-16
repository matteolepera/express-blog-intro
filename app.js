import { ferrariWins } from "./data.js";
import express from "express";

const app = express();
const port = 3333;

app.listen((port, () => {
    console.log(`Il server è pronto a bootstrappare sulla porta ${port} :)`)
}))