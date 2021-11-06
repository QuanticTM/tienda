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
        name: name,
        description: description,
        unitaryValue: parseFloat(unitaryValue),
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
                <InputNormal method={setName} /> 

                <p>descripcion</p> 
                <InputNormal method={setDescription}/> 

                <p>Precio</p> 
                <InputNormal method={setUnitaryValue}/> 

                <p>Disponibilidad</p> 
                <Selection >
                    <option>per</option>
                </Selection>

                <BotonEnvio>Termina el Registro</BotonEnvio> 
            </form>
        </MainContainer>
    )
};


export default CrearProductos;
