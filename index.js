import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
const app = express();
const PORT = 5000;

app.use(bodyParser.json());


//All routes in here start with"/""
app.use('/User', usersRoutes);

app.get('/', (req,res) => {
    console.log("Testing 123")

    res.send('Hello Guys')
} );





app.listen(PORT, () => console.log('Server running on local host port 5000'));



