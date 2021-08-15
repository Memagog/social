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
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({message: `Data isn't correct`})
            }

            await User.findOne({email: email}).then((user)=>{
                
                if(user){
                    return res.status(400).json({message: "This email already exists"})
                }
                else {
                    const hashPassword = bcrypt.hashSync(password,7);
                    const newUser = new User({
                        _id: new mongoose.Types.ObjectId,
                        username: username,
                        email: email,
                        password: hashPassword,
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
        try {
            const {email, password} = req.body;

            await User.findOne({email: email}).then((user)=>{
                
                if(!user){
                    return res.status(400).json({message: `This account does not exist in the system, please register an account!`})
                }

                bcrypt.compare(password, user.password).then((isValid)=>{
                    
                    if(!isValid){
                        return res.status(400).json({message: "Invalid password"})
                    }
                    else {
                        const payload = {
                            _id: user._id,
                            username: user.username,
                            email: user.email,
                            password: user.password,
                            roles: user.roles,
                        }
                        const token = generateJsonWebToken(payload);
                        return res.json({token})
                    }
                }) 
            })   
        } catch (error) {
            console.log(error);
            return res.json({message: `Error: ${error}`})
        }
    },    
}


module.exports = AuthController;