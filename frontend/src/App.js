import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// pages 

import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Navbar from "./components/navbar/navMain";

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

            </Switch>
        </Router>
    );

}

export default App;
