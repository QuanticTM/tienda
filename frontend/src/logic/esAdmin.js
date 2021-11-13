import {useContext} from "react";
import Message from "./message";
import { GlobalContext } from "./globalState";

const EsAdmin = props => {

    const { rol } = useContext(GlobalContext);
    
    switch(rol){

        case 3:
            return <> {props.children} </>
        case 2:
            return <Message>Esta area es exclusiva al administrador</Message>
        default:
            return <Message>No estas registrado como usuario del sistema</Message>
    }
}

export default EsAdmin;
