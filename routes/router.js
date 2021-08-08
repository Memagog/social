const express =require("express");
const router = express.Router();
const userRouter = require('./user_routes/UserRouter');
router.use('/user', userRouter);
module.exports = router;
