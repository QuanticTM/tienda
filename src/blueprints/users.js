const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const  userSch = new Schema({

    name: {
        type: String,
        required: true
    },
    rol: String,
    estado: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}); 


const x = mongoose.model("User", userSch);

module.exports = x;
