import { MainContainer }  from "../globalComponents/mainones";
import { MainHeader, Selection, OptionStyled, InputNormal, BotonEnvio }  from "../globalComponents/forms"; 
import { useEffect } from "react";
import useInput from "./useInput";

const ActualizarProductos = props => {

    const [name, setName] = useInput(props.prod.name);
    const [description, setDescription] = useInput(props.prod.description);
    const [unitaryValue, setUnitaryValue] = useInput(props.prod.unitaryValue);
    const [disponibility, setDisponibility] = useInput(props.prod.disponibility);

    

    const productPosted = {
        "id": props.prod._id,
        "name": name,
        "description": description,
        "unitaryValue": parseFloat(unitaryValue),
        "disponibility": disponibility == "true" ? true : false
    };

    const preparacion = {
        method: "POST",
        headers: {"Content-type": "application/json", "charset":"utf-8"},
        body: JSON.stringify(productPosted)
    }    

    const enviar = async (e) => {
        e.preventDefault();

        fetch("http://localhost:4269/products/actualize", preparacion)
        .then(response => response.json())
        .then(data => console.log(data)) 
        .catch(err => console.log(err));
    };

    return (
        <MainContainer>


            <MainHeader>Actualiza el Producto</MainHeader>

            <form onSubmit={enviar} >
               
                <p>Nombre</p>
                <InputNormal val={name} method={setName} /> 

                <p>descripcion</p> 
                <InputNormal val={description} method={setDescription}/> 

                <p>Precio</p> 
                <InputNormal val={unitaryValue} method={setUnitaryValue}/> 

                <p>Disponibilidad</p> 
                <Selection value={disponibility} method={setDisponibility} >

                    <OptionStyled value={true} >En stock</OptionStyled>
                    <OptionStyled value={false} >Sin stock</OptionStyled>

                </Selection>

                <BotonEnvio>Confirma la Actualización</BotonEnvio> 
            </form>
        
        </MainContainer>
    )
};

export default ActualizarProductos;
