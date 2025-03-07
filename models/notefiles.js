const mongoose = require("mongoose");
const schema = new mongoose.Schema({

    name:{
        type: String,
    },
    msg:{
        type: String,
    },
    createdAt: {
        type: Date,
        requred: true
    }
})

const Note = mongoose.model('Note', schema);
module.exports = Note;