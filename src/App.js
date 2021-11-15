import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/navMain";
import EsAdmin from "./logic/esAdmin";
import EsVendedor from "./logic/esVendedor";

// pages 

import Home from "./components/pages/home";
import CrearProductos from "./components/pages/crearProductos";
import ListarProductos from "./components/pages/listarProductos";
import ManejoDeUsuarios from "./components/pages/manejoDeUsuarios";

const App = () => {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>


                <Route exact path="/usuarios/manejo">
                    <Navbar />
                    <EsAdmin>
                        <ManejoDeUsuarios />
                    </EsAdmin>
                </Route>

                <Route exact path="/productos/registro">
                    <Navbar />
                    <EsAdmin>
                        <CrearProductos />
                    </EsAdmin>
                </Route>

                <Route exact path="/productos/listar">
                    <Navbar />
                    <EsVendedor>
                        <ListarProductos />
                    </EsVendedor>
                </Route>
            </Switch>
        </Router>
    );

}

export default App;
