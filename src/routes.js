const express = require('express');
const path = require('path');
const routes = express.Router();

routes.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/index.html'));
});
routes.get("/Services", (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/services.html'));
});
routes.get("/About", (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/about.html'));
});
routes.get("/Contact", (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/contact.html'));
});


module.exports = routes;