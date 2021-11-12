const express = require("express");
const Router = express.Router();
const Product = require("../blueprints/products");


Router.post("/create", async (req, res) => {
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


Router.get("/findall", (req, res) => {
    
    console.log("pedidos todos")
    Product.find({}, (err, result) => {
        err ? console.log(err) :
            res.json(result);
    });
    console.log("termino")
})

Router.post("/change-disponibility", async (req, res) => {
   
    try{
        let productChoose = await Product.findById( req.body.id);
        productChoose.disponibility = !productChoose.disponibility;
        productChoose.save();
        res.send("disponibilidad actualizada");
    }
    catch(err){
        console.log(err);
    }
}) 


module.exports = Router;
