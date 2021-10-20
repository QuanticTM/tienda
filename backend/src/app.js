const exp = require("express");
const path = require("path");
const app = exp();

// routes

const indexRoutes = require("./routes/index")
app.use("/", indexRoutes);


// it changes the server port or defaults to 4269

app.set('port', process.env.PORT || 4269 );

// middleware

app.use(exp.urlencoded({extended: false}));


app.listen( app.get("port"), () => {
    console.log("connected to port " + app.get("port"));
});


