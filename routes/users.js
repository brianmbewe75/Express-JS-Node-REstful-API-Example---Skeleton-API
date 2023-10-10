import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { createUser } from '../controllers/users.js';
import { getUsers } from '../controllers/users.js';
import { getUserById } from '../controllers/users.js';
import { deleteUserbyId } from '../controllers/users.js';
const router = express.Router();

let users = [];



// all routes in here start with /
router.get('/', getUsers);
router.post('/add-user', createUser);

//we can get the id from the route thought the req params
//cause its stored in the req.params
router.get('/:id', getUserById );


router.delete('/:id', deleteUserbyId);

// to update we use the patch request 
// if you want to change just some bits we use patch
// if yoou want to update everything we use the put method 
router.patch('/:id', (req, res) =>{
    const { id } = req.params;
// in this case we are trying to get the attributes that have to be updates
//geting the values from the body
    const { firstName, lastName, age } = req.body;

    // in this case we are just trying to fetch the user that matches the id
    const userToBeUpdated = users.find((user) => user.id  == id);
console.log(userToBeUpdated);

if(firstName) userToBeUpdated.firstName = firstName;
if(lastName) userToBeUpdated.lastName = lastName;
if(age) userToBeUpdated.age = age;

res.send(`user with the id: ${id} has been updared`);
});


export default router;