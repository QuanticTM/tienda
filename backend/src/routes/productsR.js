const express = require("express");
const Router = express.Router();
const Product = require("../blueprints/products");
const bodyParser = require("body-parser");

const JSONparsed = bodyParser.json()


Router.post("/create", async (req,res) => {
    console.log("enviando")
    console.log(req.body);
    const product = new Product({

        name: req.body.name,  
        description: req.body.description,  
        unitaryValue: req.body.unitaryValue,  
        disponibility: req.body.disponibility
    })
    const saved = await product.save();
    console.log(saved);
    return saved;
})

Router.get("/create", JSONparsed,async (req,res) => {

    res.send("hola");
})



module.exports = Router;
