const express = require('express');

const app = express();
app.use(express.json());
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

app.get("/findSummations/:number1/:number2", (req, res) => {
    const num1 = req.params.number1;
    const num2 = req.params.number2;
    const summation = Number(num1) + Number(num2);

res.send(`the summation is ${summation}`);

    
});
app.get("/sayHello", (req, res) => {
    //console.log(req.body);

    console.log(req.query);
    res.send(`hello ${req.body.name}, Age is ${req.query.age}`);

    
});









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