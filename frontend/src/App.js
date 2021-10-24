import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/navMain";

// pages 

import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import CrearProductos from "./components/pages/crearProductos";

const App = () => {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/login">
                    <Navbar />
                    <Login />
                </Route>

                <Route path="/registro">
                    <Navbar />
                    <Register />                    
                </Route>

                <Route exact path="/productos/registro">
                    <Navbar />
                    <CrearProductos />
                </Route>

            </Switch>
        </Router>
    );

}

export default App;
