const express = require("express");
const Router = express.Router();
const Product = require("../blueprints/products");


Router.post("/create", async (req,res) => {
    console.log(req.body);
    console.log(req.body.name);
    const product = new Product({
        name: req.body.name,  
        description: req.body.description,  
        unitaryValue: req.body.unitaryValue,  
        disponibility: req.body.disponibility
    })
    await product.save();
    res.send("recibido");
})




module.exports = Router;
