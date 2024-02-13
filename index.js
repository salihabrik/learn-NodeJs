const express = require('express');

const app = express();
app.get('/', (req, res) => {

    res.send("hello this is my first project nodejs ");
})
app.post('/Hello', (req, res) => {

    res.send("Hello from post");
})
app.put('/test', (req, res) => {

    res.send("you can visited test ");
})
app.delete('/test', (req, res) => {
    res.send("you can delete test ");
})

    app.get('/hi', (req, res) => {
        let numbers = "";
        for (let i = 0; i < 100; i++) {
            numbers += i + '|';
        }
res.send(`hi you can visited hi the numbers are :${numbers})`); 
    });


    app.listen(3000, () => {

    console.log("Server running on port 3000");
})