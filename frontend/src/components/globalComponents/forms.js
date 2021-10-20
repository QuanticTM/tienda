import {useContext} from "react"
import {GlobalContext} from "../../logic/globalState"

const InputNormal = props => {

    const { tema } = useContext(GlobalContext);

    const st = {
        backgroundColor: tema.secundario,
        color: tema.letraSecundaria
    }
    
    return (
        <input type={props.type || "text"} className="input-text" style={st}/>
    )
}

const BotonEnvio = props => {

    const { chosenColor } = useContext(GlobalContext);

    const st = {backgroundColor: chosenColor};

    return (
        <button className="post-bottom" style={st} >{props.children}</button>
    )
}

const InputContraseña = () => {

    return (
        <InputNormal type="password" />
    )
}



export { InputNormal, BotonEnvio, InputContraseña};
