import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// pages 
import Home from "./components/pages/home";
import Login from "./components/pages/login";

const App = () => {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/registro">
                    <h1> registro </h1> 
                </Route>

            </Switch>
        </Router>
    );

}

export default App;
