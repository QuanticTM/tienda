const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSch = new Schema({
    name: {
        type:String,
        unique: true,
        required: true
    },
    description: String,
    
    unitaryValue:{
        type: Number,
        required: true 
    },
    disponibility: {
        type: Boolean,
        required: true
    }
})

module.export = mongoose.model("Product",productSch);
