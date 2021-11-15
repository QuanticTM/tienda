const express = require("express");
const Router = express.Router();
const User = require("../blueprints/users");

Router.get("/findall", (req, res) => {

    console.log("captando usuarios")
    User.find({}, (err, result) => {
        err ? console.log(err) :
            res.json(result) && console.log(result);
    });
})

const createUser = async(req, res) => {

    const user = new User({
        name: req.body.name,  
        email: req.body.email,  
        estado: "pendiente",  
        rol: "vendedor"
    })
    await user.save();
    res.send("recibido");

}

Router.post("/create", async (req, res) => {
    

    User.find({}, (err,result) => {
        if(err) 
        {
            console.log(err);
        }
        else
        {
            console.log("pep")
            let isMatched = false;
            for(let i = 0; i < result.length; i++)
            {
                if(result[i].email === req.body.email)
                {
                    isMatched = true;
                }
            }

            if(!isMatched)
            {
                createUser()
            }
            else
            {
                res.send("Ya estaba el usuario")
                console.log("ya estaba");
            }
        }
    });
    /*
    */

})

Router.post("/actualize", async (req, res) =>{

    try
    {
        let userChoose = await User.findById( req.body.id);
        if(req.body.rol)
        {
           userChoose.rol = req.body.rol; 
            await userChoose.save();
            res.send("actualizar rol");
        }
        else if(req.body.estado)
        {
            userChoose.estado = req.body.estado; 
            await userChoose.save();
            res.send("actualizar estado");
        }
        else
        {
        res.send("Cambios sin hacer");
        }
    }
    catch(err)
    {
        console.log(err);
    }
})


module.exports = Router;
