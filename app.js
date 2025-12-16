import { log } from "console";
import { ferrariWins } from "./data.js";
import express from "express";

const app = express();
const port = 4416;

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send("Server bootstrappato by MatteoStrap")

})

app.get("/bacheca", (req, res) => {

    const response = {
        info: {
            totalPosts: ferrariWins.length,
            leclercWins: driverTotalWin("Leclerc"),
            sainzWins: driverTotalWin("Sainz"),
        },
        results: ferrariWins,
    }

    res.json(response)
})

app.listen(port, () => {
    console.log(`Il server è pronto a bootstrappare sulla porta ${port} :)`)
})


function driverTotalWin(name) {
    let count = 0;
    ferrariWins.forEach(win => {
        win.tags.forEach(tag => {
            if (tag === name) {
                count++;
            }
        })
    })
    return count;
}
