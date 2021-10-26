const exp = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = exp();

// routes

const indexRoutes = require("./routes/index")
app.use("/", indexRoutes);


// it changes the server port or defaults to 4269

app.set('port', process.env.PORT || 4269 );

// middleware

app.use(exp.urlencoded({extended: false}));

const connectionUrl = "mongodb+srv://dbAdmin:b1pIzXu8ucc6RXt4@cluster0.5roux.mongodb.net/Cluster0?retryWrites=true&w=majority";


const { MongoClient } = require('mongodb');

try{
    const client = new MongoClient(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    });
}
catch(err){
    console.log(err);
}


app.listen( app.get("port"), () => {
    console.log("connected to port " + app.get("port"));
});


