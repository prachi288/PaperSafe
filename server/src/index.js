const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require("./config/serverConfig");
const dbConnect = require("./config/database");

const app = express();

const setupAndStartServer = async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(8008, ()=>{
        console.log(`Server Running on PORT`);
        // dbConnect();
    });
}

setupAndStartServer();

