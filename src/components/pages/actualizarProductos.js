import { MainContainer }  from "../globalComponents/mainones";
import { MainHeader, Selection, OptionStyled, InputNormal, BotonEnvio }  from "../globalComponents/forms"; 
import { useEffect } from "react";
import useInput from "./useInput";

const ActualizarProductos = props => {

    const [name, setName] = useInput("");
    const [description, setDescription] = useInput("");
    const [unitaryValue, setUnitaryValue] = useInput(0);
    const [disponibility, setDisponibility] = useInput(false);


    const req = {
        method: "POST",
        headers: {"Content-type": "application/json", "charset":"utf-8"},
        body: JSON.stringify({"id": props._id})
    }
    useEffect(() => {
        fetch("http://localhost:4269/products/findone", req)
        .then(res => res.json())
        .then(data => {
            setName(data.name);
            setDescription(data.description);
            setUnitaryValue(data.unitaryValue);
            setDisponibility(data.disponibility);
        })
        .catch(err => console.log(err));
    },[])
    

    const productPosted = {
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
        console.log("Enviado");
        console.log(productPosted);

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

                <BotonEnvio>Actualiza</BotonEnvio> 
            </form>
            
            <BotonEnvio>vuelve</BotonEnvio> 
        
        </MainContainer>
    )
};

export default ActualizarProductos;
