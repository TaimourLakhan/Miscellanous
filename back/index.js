const express = require("express");
const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log(`app is listening at the port ${port}`);
})

app.get("/register", (req, res) => {
    let { user, pass } = req.query;
    res.send(`welcom ${user} to stand get response`);
})

app.post("/register", (req, res) => {
    let { user, pass } = req.body;
    res.send(`welcom ${user} to stand post response`);
})

