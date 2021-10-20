import {useContext} from "react"
import {GlobalContext} from "../../logic/globalState"

const InputNormal = () => {

    const { tema } = useContext(GlobalContext);

    const st = {
        backgroundColor: tema.principal,
        color: tema.letraSecundario
    }
    
    return (
        <input type="text" className="input-text" style={st}/>
    )
}

const BotonEnvio = props => {
   
    return (
        <button>{props.children}</button>
    )
}

const InputCifrado = () => <h1>yay</h1>



export { InputNormal, BotonEnvio, InputCifrado };
