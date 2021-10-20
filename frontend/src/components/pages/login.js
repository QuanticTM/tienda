import { MainContainer }  from "../globalComponents/mainones";
import { InputNormal, BotonEnvio }  from "../globalComponents/forms";

const Login = () => {
    

    return (
        <MainContainer>
            <h2>Login is here </h2>
            <form onSubmit="" >
               
                <p>Nombre Completo</p>
                <InputNormal /> 
                
                <p>Correo</p>
                <InputNormal /> 

                <p>Contraseña</p> 
                <InputNormal /> 

                <BotonEnvio> Registrate </BotonEnvio> 
            </form>
        </MainContainer>
    )
};


export default Login;
