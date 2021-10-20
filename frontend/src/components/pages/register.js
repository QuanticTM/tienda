import { MainContainer }  from "../globalComponents/mainones";
import { InputNormal, BotonEnvio, InputContraseña}  from "../globalComponents/forms";

const Register = () => {
    

    return (
        <MainContainer>
            <h2>Registro</h2>

            <form onSubmit="" >
               
                <p>Nombre Completo</p>
                <InputNormal /> 
                
                <p>Correo</p>
                <InputNormal /> 

                <p>Nueva Contraseña</p> 
                <InputContraseña />

                <p>Verifica tu Contraseña</p> 
                <InputContraseña />

                <BotonEnvio> Registrate </BotonEnvio> 

            </form>
        </MainContainer>
    )
};


export default Register;
