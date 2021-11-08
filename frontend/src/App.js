import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/navMain";
import EstaPendiente from "./logic/pendiente";

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
                    <EstaPendiente>
                        <Login />
                    </EstaPendiente>
                </Route>

                <Route path="/registro">
                    <Navbar />
                    <EstaPendiente>
                        <Register />
                    </EstaPendiente>
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
