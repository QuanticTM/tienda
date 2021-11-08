import {useContext} from "react";
import Message from "./message";;import { GlobalContext } from "./globalState";

const EsAdmin = props => {

    const { rol } = useContext(GlobalContext);
    
    switch(rol){

        case 0:
            return <> {props.children} </>

        case 1:
            return <Message>
                Estas Pendiente, espera la <br/> intervencion del administrador
                </Message>
        default:
            return <Message>No estas registrado como usuario del sistema</Message>
    }
}

export default EsAdmin;
