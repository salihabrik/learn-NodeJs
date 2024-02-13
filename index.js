const express = require('express');

const app = express();

app.get('/Hello', (req, res) => {

    res.send("Hello");
})
app.get('/test', (req, res) => {

    res.send("you can visited test ");
})
    app.get('/hi', (req, res) => {
        res.send(`hi you can visited`); 
    });
    app.listen(3000, () => {

    console.log("Server running on port 3000");
})