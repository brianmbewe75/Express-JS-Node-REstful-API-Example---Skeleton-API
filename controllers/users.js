import { v4 as uuidv4 } from 'uuid';

export const createUser = (req, res) => {

    const user = req.body;

    users.push({ ...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} added to the database`);
 
}

export const getUsers = (req, res) => {   

    console.log(users);

res.send(users);

}

//Get User By ID 
export const getUserById = (req,res) => {

    const { id } = req.params;

   const foundUser =  users.find((user) => user.id == id); 

    res.send(foundUser);

};



export const deleteUserbyId =(req, res) =>{
    const { id } = req.params;

// remvoe all users except the one thats in the array(filter)
    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} was deleted from the database`); 

};