const exp = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = exp();
const cors = require("cors");

// it changes the server port or defaults to 4269

app.set('port', process.env.PORT || 4269 );

// middleware

app.use(exp.urlencoded({extended: true}));
app.use(exp.json());
app.use(cors());


// routes

app.use("/products", require("./routes/productsR"));


// connect
const connectionUrl = "mongodb+srv://bdAdmin:b1pIzXu8ucc6RXt4@cluster0.5roux.mongodb.net/Project_0?retryWrites=true&w=majority"

mongoose.connect(connectionUrl)
.catch(err => console.log("this happened " + err));




