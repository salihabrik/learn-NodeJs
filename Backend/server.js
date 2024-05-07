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

app.get('/getall', ()=>{
    console.log('getall work');
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


