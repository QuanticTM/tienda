import {useContext} from "react"
import {GlobalContext} from "../../logic/globalState"

const InputNormal = props => {

    const { tema } = useContext(GlobalContext);

    const st = {
        backgroundColor: tema.secundario,
        color: tema.letraSecundaria
    }
    
    return (
        <input type={props.type || "text"} onChange={props.method} className="input-text" style={st}/>
    )
}

const BotonEnvio = props => {

    const { chosenColor } = useContext(GlobalContext);
    const st = {backgroundColor: chosenColor[0]};

    return  <button className="post-bottom" style={st} >{props.children}</button>
}

const MainHeader = props => {
    const { chosenColor } = useContext(GlobalContext);
    return <h1 style={{color: chosenColor[2]}} > {props.children} </h1>
}


const InputContraseña = props => <InputNormal type="password" method={props.method}/>

const Selection = props => {

    const { chosenColor, tema } = useContext(GlobalContext);
    const st = { 
        borderColor: chosenColor[1],
        backgroundColor: tema.secundario,
        color: tema.letraSecundaria
    };

    return <select className="selection" style={st} onChange={props.method} value={props.val} > {props.children} </select>
}

const OptionStyled = props => {
    
    const { chosenColor } = useContext(GlobalContext);
    const st = {
        backgroundColor: chosenColor[0]
    }
    
    return <option className="" value={props.value} >{props.children} </option>
}

export {MainHeader, InputNormal, BotonEnvio, InputContraseña, Selection, OptionStyled};
