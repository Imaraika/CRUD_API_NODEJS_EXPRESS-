import express from 'express';
import bodyParser from 'body-parser';
 import userRoutes from './routes/users.js';


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', userRoutes);


app.get('/', (req, res) => {
    res.send("Welcome to My nodejs CRUD API project");
})

app.listen(PORT, () => console.log(`the server is running on: http://localhost:${PORT}`))