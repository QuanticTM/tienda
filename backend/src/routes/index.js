const express = require("express");
const router = express.Router();

router.get("/", (req,res) =>{
    res.send("hello world");
})

router.get("/product/add", (req,res) =>{
    console.log(req.body);
    console.log("negros muy")
})

module.exports = router;

