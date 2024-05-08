const express = require('express');
const User = require('./models/user');

require('./config/connect');

const app = express();
app.use(express.json());
app.post('/add', (req, res)=>{
    data = req.body;
    usr = new User(data);
    usr.save()
   
        .then(
            (savedUsers)=>{
                res.send(savedUsers);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )
});

app.post('/create' ,async (req, res)=>{
    try {
        data = req.body;
        usr = new User(data);

        savedUsers = await usr.save();
        res.send(savedUsers);

    } catch (error) {
        res.send(error);
    }
}



)

app.get('/getall', (req, res)=>{
    User.find()
        .then(
            (users)=>{
                res.send(users);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )
});

app.get('/all' , async (req, res)=>{
    try {
        users = await User.find({ age: 22});
        res.send(users);
    } catch (error) {
        res.send(error);
    }
})

app.get('/getbyid/:id', (req, res)=>{
    myid - req.params.id;

    User.findOne({ _id: myid })
        .then(
            (user)=>{
                res.send(user);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )
});
app.get('/getbyid/:id', (req, res)=>{
    myid - req.params.id;

    User.findOne({ _id: myid })
        .then(
            (user)=>{
                res.send(user);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )
});

app.put('/update', ()=>{
    console.log('update work');
});

app.delete('/delete', ()=>{
    console.log('delete work');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});


