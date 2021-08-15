const express =require("express");
const router = express.Router();
const userRouter = require('./user_routes/UserRouter');
const {check} = require('express-validator');
router.use('/user',[
    check("email"," email' should not be empty").notEmpty(),
    check("password","It's not valid password").isLength({min:4 , max: 12}),
], userRouter);
module.exports = router;
