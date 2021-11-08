import { MainContainer }  from "../globalComponents/mainones";
import { MainHeader, Selection, OptionStyled, InputNormal, BotonEnvio }  from "../globalComponents/forms"; 
import useInput from "./useInput";

const CrearProductos = () => {
    
    // state json post
    
    const [name, setName] = useInput("");
    const [description, setDescription] = useInput("");
    const [unitaryValue, setUnitaryValue] = useInput(0);
    const [disponibility, setDisponibility] = useInput(false);


    const productPosted = {
        "name": name,
        "description": description,
        "unitaryValue": parseFloat(unitaryValue),
        "disponibility": disponibility === "true" ? true : false
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

        fetch("http://localhost:4269/products/create", preparacion)
        .then(response => response.json())
        .then(data => console.log(data)) 
        .catch(err => console.log(err));
    };

    return (
        <MainContainer>


            <MainHeader>Registra el nuevo Producto</MainHeader>

            <form onSubmit={enviar} >
               
                <p>Nombre</p>
                <InputNormal method={setName} /> 

                <p>descripcion</p> 
                <InputNormal method={setDescription}/> 

                <p>Precio</p> 
                <InputNormal method={setUnitaryValue}/> 

                <p>Disponibilidad</p> 
                <Selection value={disponibility} method={setDisponibility} >

                    <OptionStyled value={true} >En stock</OptionStyled>
                    <OptionStyled value={false} >Sin stock</OptionStyled>

                </Selection>

                <BotonEnvio>Termina el Registro</BotonEnvio> 
            </form>
        </MainContainer>
    )
};


export default CrearProductos;
