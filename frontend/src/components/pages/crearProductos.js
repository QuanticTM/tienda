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
        mode: "no-cors",
        method: "POST",
        headers: {"Content-type": "application/json", "charset":"utf-8"},
        body: JSON.stringify(productPosted)
    }    

    const enviar = async (e) => {
        e.preventDefault();
        console.log("Enviado");
        console.log(productPosted);
        try{
        await fetch("http://localhost:4269/products/create", preparacion); 
        }
        catch(de){
            console.log(de + " error, no se uso fetch");
        }
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
