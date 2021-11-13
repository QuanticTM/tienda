import {useContext} from "react";
import Message from "./message";
import { GlobalContext } from "./globalState";

const EstaPendiente = props => {

    const { rol } = useContext(GlobalContext);
    
    switch(rol){

        case 0:
            return <> {props.children} </>

        case 1:
            return <Message>
                Estas Pendiente, espera la <br/> intervencion del administrador
                </Message>
        default:
            return <Message>Ya estas conectado a la App </Message>
    }
}

export default EstaPendiente;
