const express = require("express");
const Router = express.Router();
const Product = require("../blueprints/products");


Router.post("/create", async (req, res) => {

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
    
    Product.find({}, (err, result) => {
        err ? console.log(err) :
            res.json(result);
    });
})

Router.post("/change-disponibility", async (req, res) => {
   
    try{
        let productChoose = await Product.findById( req.body.id);
        productChoose.disponibility = !productChoose.disponibility;
        await productChoose.save();
        res.send("disponibilidad actualizada");
    }
    catch(err){
        console.log(err);
    }
}) 

Router.post("/actualize", async (req, res) => {

    console.log(req.body);

    await Product.findByIdAndUpdate(req.body.id, {
    name : req.body.name,
    description : req.body.description,
    unitaryValue : req.body.unitaryValue,
    disponibility : req.body.disponibility
    },
    (err, result) => console.log(err ? err : result)
    ).catch(err => console.log(err))
}) 



module.exports = Router;
