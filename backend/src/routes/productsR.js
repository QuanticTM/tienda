const express = require("express");
const Router = express.Router();
const Product = require("../blueprints/products");
console.log(typeof(Product));


Router.post("/create", async (req,res) => {
    console.log("enviando")
    console.log(req.body);
    console.log(req.body.name);
    const product = new Product({
        name: req.body.name,  
        description: req.body.description,  
        unitaryValue: req.body.unitaryValue,  
        disponibility: req.body.disponibility
    })
    const saved = await product.save();
    console.log(saved);
    res.status(201).send();
    return saved;
})




module.exports = Router;
