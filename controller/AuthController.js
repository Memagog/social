const mongoose = require('mongoose');
const User = require('../model/User');

const AuthController = {
    async registration(req,res) {
        try {
            const {username, email, password, roles} = req.body;
            
            await User.findOne({email: email}).then((user)=>{
                if(user){
                    return res.status(400).json({message: "This email already exists"})
                }
                else {
                    const newUser = new User({
                        _id: new mongoose.Types.ObjectId,
                        username: username,
                        email: email,
                        password: password,
                        roles: roles,
                    });
                    newUser.save();
                    return res.status(200).json({message: `Hello ${newUser.username + newUser.roles}`})
                }
            })
        } catch (error) {
            console.log(error);
            return res.json({message: `Error: ${error}`})
        }      
    },

    async login(req,res) {
        await res.json({message: "Hello login"})
    },    
}


module.exports = AuthController;