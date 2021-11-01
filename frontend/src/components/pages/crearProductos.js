import { MainContainer }  from "../globalComponents/mainones";
import { MainHeader, InputNormal, BotonEnvio }  from "../globalComponents/forms"; 
import {useState} from "react";

const CrearProductos = () => {
    
    // state json post
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [unitaryValue, setUnitaryValue] = useState(0);
    const [disponibility, setDisponibility] = useState(false);


    const productPosted = {
        name: name,
        description: description,
        unitaryValue: unitaryValue,
        disponibility: disponibility
    };

    const preparacion = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(productPosted)
    }    

    const enviar = async () => await fetch("localhost/products/create", preparacion); 



    return (
        <MainContainer>


            <MainHeader>Registra el nuevo Producto</MainHeader>

            <form onSubmit={enviar} >
               
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
