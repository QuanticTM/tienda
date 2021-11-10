import imgurl from "./homeback.jpeg";
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <div className="home-back" style={{backgroundImage: "url("+imgurl+")" }}>
            <div className="options-wrapper home-options" >
                <h1>Bienvenido a BD</h1>
                <p><Link to="/login" >Por favor, ingresa al sistema </Link> </p>
                <p><Link to="/registro" >O crea tu cuenta </Link> </p>
            </div>

        </div>
    )
};


export default Home;
