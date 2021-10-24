import { MainContainer }  from "../globalComponents/mainones";
import { MainHeader, InputNormal, BotonEnvio }  from "../globalComponents/forms"; 

const CrearProductos = () => {
    

    return (
        <MainContainer>


            <MainHeader>Registra el nuevo Producto</MainHeader>

            <form onSubmit="" >
               
                <p>Nombre</p>
                <InputNormal /> 

                <p>descripcion</p> 
                <InputNormal /> 

                <p>Precio</p> 
                <InputNormal /> 

                <p>Disponibilidad</p> 
                <InputNormal /> 

                <BotonEnvio>Termina el Registro</BotonEnvio> 
            </form>
        </MainContainer>
    )
};


export default CrearProductos;
