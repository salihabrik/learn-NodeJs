const express = require('express');
const mongoose = require('mongoose');
const app = express();
const articleApp = express(); // Separate express app instance for articles endpoints
const Article = require('./models/Article.js');

app.use(express.json());

// Connect to MongoDB
//mongoose.connect("mo")
    .then(() => {
        console.log("Connected to the database!");
    }).catch((error) => {
        console.log("Error connecting to DB", error);
    });

app.get('/', (req, res) => {
    res.send("Hello, this is my first project using Node.js");
});

app.post('/Hello', (req, res) => {
    res.send("Hello from post");
});

app.put('/test', (req, res) => {
    res.send("You can visit test");
});

app.delete('/test', (req, res) => {
    res.send("You can delete test");
});

app.get("/findSummations/:number1/:number2", (req, res) => {
    const num1 = req.params.number1;
    const num2 = req.params.number2;
    const summation = Number(num1) + Number(num2);
    res.send(`The summation is ${summation}`);
});

app.get("/sayHello", (req, res) => {
    res.json({
        name: req.body.name,
        age: req.query.age,
        language: "Arabic"
    });
});

app.get('/numbers', (req, res) => {
    let numbers = "";
    for (let i = 0; i < 100; i++) {
        numbers += i + '|';
    }
    res.render('numbers.ejs', {
        name: "saliah",
        numbers: numbers,
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// Articles endpoints on port 3002
articleApp.use(express.json());

articleApp.get('/articles', (req, res) => {
    res.send("The new article has been stored");
});

articleApp.listen(3002, () => {
    console.log("Listening on port 3002 for articles endpoints");
});



/*const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const Aricle = require('./models/Article.js');



//mongodb+srv:/<password>@cluster0.tir8gti.mongodb.net/?retryWrites=true&w=majority
mongoose
.connect("mongodb+srv:")
.then(() => {
    console.log("Connected to the database!");
}).catch((error) => {
    console.log("error with connecting with DB", error);
});

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

    //console.log(req.query);
    //res.send(`hello ${req.body.name}, Age is ${req.query.age}`);

    res.json({
        name: req.body.name,
        age: req.query.age,
        language: "arabic"
    });
});









    app.get('/numbers', (req, res) => {
        let numbers = "";
        for (let i = 0; i < 100; i++) {
            numbers += i + '|';
        }
        //res.send(`hi you can visited hi the numbers are :${numbers})`); 
        //res.sendFile(__dirname + "/views/numbers.ejs")
        res.render('numbers.ejs', {
            "name" : "saliah",
            "numbers" : numbers,

        });
    });


    app.listen(3000, () => {

    console.log("Server running on port 3000");
})


//articles endpoints

app.post("/articles", async (req, res) => {
const newArticle = new Article();
newArticle.title = "my first article"
newArticle.body = "this is my first body article"
newArticle.numberOfLikes = 100
await newArticle.save();

res.send("the new article has been stored");
});
app.listen(3000, () => {
console.log("i am listening in port 3000");
});*/