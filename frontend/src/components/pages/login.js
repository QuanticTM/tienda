import { MainContainer }  from "../globalComponents/mainones";
import { InputNormal, BotonEnvio, InputContraseña}  from "../globalComponents/forms";
import Navbar  from "../navbar/navMain";

const Login = () => {
    

    return (
        <MainContainer>


            <h2>Login is here </h2>

            <form onSubmit="" >
               
                <p>Correo</p>
                <InputNormal /> 

                <p>Contraseña</p> 
                <InputContraseña />

                <BotonEnvio> Entra al sistema</BotonEnvio> 
            </form>
        </MainContainer>
    )
};


export default Login;
