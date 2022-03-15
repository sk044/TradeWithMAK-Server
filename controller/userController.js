var userDb = require('../model/users');

// create and save
exports.saveUser = async (req, res) => {

    const user = new userDb({
        name: req.body.name,
        username: req.body.username,
        address: req.body.address,
        phoneno: req.body.phoneno,
        email: req.body.email,
        dob: req.body.dob
    });

    console.log("Adding User to DB");

    user
    .save(user)
    .then(data => {
        console.log(data);
        console.log("Added to db succcessfully");
        res.send(data);
    })
    .catch(err =>{
        console.log("Nothing added to db");
        console.log(err);
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    });
    
  }

  // get flashcards all

  exports.getUsers = (req, res)=>{
    userDb.find() 
        .then(item => {
          res.send(item)
        })
        .catch(err => {
            res.status(500).send({ message : err.message || "Error Occurred while retriving item information" })
      })
  
}


// Update
exports.updateUser = async (req, res)=>{

    const id = req.params.id;

    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }else{
        console.log(req.body);
    }

    userDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot user with ${id}. Maybe book not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error user information"})
        })
}

// Delete
exports.deleteUser = (req, res)=>{
    const id = req.params.id;

    userDb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({                                                         // deleting from db
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete user with id=" + id
            });
        });
}
