import { MainContainer }  from "../globalComponents/mainones";
import { MainHeader, InputNormal, BotonEnvio, InputContraseña }  from "../globalComponents/forms"; 
import { LoginButton } from "./Login2";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <MainContainer>


            <MainHeader>Login is here </MainHeader>

            <form onSubmit="" >
               
                <p>Nombre</p>
                <InputNormal /> 

                <p>Contraseña</p> 
                <InputContraseña />

                <BotonEnvio> Entra al sistema</BotonEnvio> 

                <div>
                <header className="App-header">
                    {isAuthenticated ? (
                      <>
                        <Profile />
                        <LogoutButton />
                      </>
                    ) : (
                      <LoginButton />
                    )}
                  </header>
                </div>


            </form>
        </MainContainer>
    )
};


export default Login;
