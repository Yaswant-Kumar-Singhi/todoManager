const express = require("express");

app.use(express.urlencoded());

//configuring database
const db = require('../config/mongoose');
const todoInfo = require('../models/todoInfo');

//creating a todoTask
module.exports.addTask = function(req,res){
    todoInfo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    },function(err,newTask){
        if(err){
            console.log("Error while creating the Task");
            return ;
        }
        return res.redirect('back');
    });
};