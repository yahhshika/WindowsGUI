const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    url:{
        type: String
    },
    index:{
        type: Number
    }
})

const Bg =  mongoose.model("Bg", schema);
module.exports = Bg;