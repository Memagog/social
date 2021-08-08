const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const {mongoUrl} = require("./config/db_data");
const router = require('./routes/router.js');

app.use(bodyParser.urlencoded({
    extended: true
}))  
app.use(express.json());
app.use(cors());
app.use('/api', router);

const server =  async () => {
    try {
        await mongoose.connect(mongoUrl,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log(`Database is connected`))
        await app.listen(port, () => console.log(`listening on http://localhost:${port}`));
    } catch (error) {
        console.log(error)
    }      
}

server();


