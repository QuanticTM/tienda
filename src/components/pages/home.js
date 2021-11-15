import imgurl from "./homeback.jpeg";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const DynamicMenu = () => {

    const { loginWithRedirect, isLoading, user, isAuthenticated } = useAuth0();


    const postUser = () => {

         
        
        const userPosted = {
            "name": user.name,
            "email": user.email,
        };

        const preparacion = {
            method: "POST",
            headers: {"Content-type": "application/json", "charset":"utf-8"},
            body: JSON.stringify(userPosted)
        }    

        fetch("http://localhost:4269/users/create", preparacion)
        .then(response => response.json())
        .then(data => console.log(data)) 
        .catch(err => console.log(err));
        
    }

    if(!isLoading)
    { 
        if(isAuthenticated)
        {
            postUser();
        }
    }



    return isLoading ? <p>Cargando...</p> : isAuthenticated ?
    (
        <>
        
            <p><Link to="/productos/listar" > ingresa al Modulo de productos </Link> </p>
        </>
    )
    : <p onClick={() => loginWithRedirect()}> Por favor, ingresa al sistema  </p>
}


const Home = () => {

    return(
        <div className="home-back" style={{backgroundImage: "url("+imgurl+")" }}>
            <div className="options-wrapper home-options" >
                <h1>Bienvenido a BD</h1>
                <DynamicMenu />
            </div>

        </div>
    )
};


export default Home;
