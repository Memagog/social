const mongoose = require('mongoose');
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config');

const generateJsonWebToken = (payload) => {
    return jwt.sign(payload, secretKey, {expiresIn: "24h"});
}
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
                    const payload = {
                        _id: newUser._id,
                        username: newUser.username,
                        email: newUser.email,
                        password: newUser.password,
                        roles: newUser.roles,
                    }
                    const token = generateJsonWebToken(payload);

                    return res.status(200).json({message: `Hello ${newUser.username +' and your token' + token}`})
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