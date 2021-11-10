import { MainContainer }  from "../globalComponents/mainones";
import { MainHeader, InputNormal, BotonEnvio, InputContraseña }  from "../globalComponents/forms"; 

const Login = () => {
    

    return (
        <MainContainer>


            <MainHeader>Login is here </MainHeader>

            <form onSubmit="" >
               
                <p>Nombre</p>
                <InputNormal /> 

                <p>Contraseña</p> 
                <InputContraseña />

                <BotonEnvio> Entra al sistema</BotonEnvio> 
            </form>
        </MainContainer>
    )
};


export default Login;
