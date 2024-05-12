import express from 'express';

const router = express.Router();

const users = [{
    firstname: "gigy",
    lastname: "lili",
    email: "ligi@gmail.com",
},
{
    firstname: "lope",
    lastname: "polo",
    email: "polo@gmail.com",

},];

router.get('/', (req, res) => {
    res.send(users);
})

export default router;