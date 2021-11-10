import {useContext} from "react";
import Message from "./message";
import { GlobalContext } from "./globalState";

const EsVendedor = props => {

    const { rol } = useContext(GlobalContext);
    
    return rol >= 2 ? 
        <> {props.children} </>   
        :
        <Message>No estas registrado como usuario del sistema</Message>
    
}

export default EsVendedor;
