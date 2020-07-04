//Creating Database Schemas for TODO List

const mongoose = require('mongoose');

const mongooseSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
});

const todoInfo = mongoose.model('todoInfo',mongooseSchema);
module.exports = todoInfo;


