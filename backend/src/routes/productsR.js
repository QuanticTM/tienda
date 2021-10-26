const express = require("express");
const Router = express.Router();
const Product = require("../blueprints/products");



Router.post("/create", async (req,res) => {
    const product = new Product({

        name: req.body.name,  
        description: req.body.description,  
        unitaryValue: req.body.unitaryValue,  
        disponibility: req.body.disponibility
    })
    const saved = await product.save();
    res.send(saved);
})

Router.get("/create", async (req,res) => {

    res.send("hola");
})

module.exports = Router;
