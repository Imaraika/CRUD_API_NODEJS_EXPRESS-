import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = [];

router.post('/', (req, res) => 
{
    const user =req.body;
    users.push({...user, id:uuidv4() });
    res.send(`${user.firstname} has been added to the database`)
})
router.get('/', (req, res) => {
    res.send(users);
})
router.get('/:id',(req, res ) => 
{
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser);
})
router.delete('/:id', (req, res) => 
{
    const { id } =req.params;

    users = users.filter((user )=> user.id !== id)
    res.send(`${id} deleted successfully in Database`);
})

router.patch('/:id', (req, res) =>
{
    const {id} = req.params;
    const {firstname, lastname, email } = req.body;

    const user = users.find((user) => user.id === id)

    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(email) user. email = email;

    res.send(`this ${id} has been updated successfully`);
})
export default router;