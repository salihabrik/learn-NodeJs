import express from 'express';
import bcrypt from 'bcrypt';
import path from 'path';

const app = express();
const port = 3000;

const users = [
    
]

app.use(express.json());

app.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = users.find((data) => email == data.email)
        if (findUser) {
            res.status(400).send({ message: 'Wrong email or password !' })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        users.push ({ email, password: hashedPassword });
        console.log(users)
        res.status(201).send({ message: 'Register successfully' })
    
    }catch (error) {
        res.status(400).send({message: error.message})
    }
    });

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = users.find((data) => email == data.email)
        if (!findUser) {
            res.status(400).send({ message: 'Wrong email or password !' })
        }
        const isMatch = await bcrypt.compare(password, findUser.password)
        if (!isMatch) {
            res.status(400).send({ message: 'Wrong email or password !' })
        }
        res.status(201).send({ message: 'Login successfully' })
}
    catch (error) {
        res.status(500).send({message: error.message})
    }});
app.listen(port, () => {
    console.log('Server running on port 3000')
});
