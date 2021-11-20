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
app.use("/users", require("./routes/usersR"));


// connect


mongoose.connect(connectionUrl)
.then(() => (
    app.listen(app.get("port"), () => {
        console.log("Listening in port: " +  app.get("port"));
    })
))
.catch(err => console.log("this happened " + err));




