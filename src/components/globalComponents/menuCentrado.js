import {  SelectionC, OptionStyledC } from "./forms";
import { useContext } from "react";
import { GlobalContext } from "../../logic/globalState";

const BotonDual = props => {

    return (
        <div className="container-button" >
            <button className="dual-button main" >
                {props.children}
            </button>
            <button className="dual-button secundary" onClick={props.exitMethod} >
                Salir
            </button>
        </div>
    )
}

const MenuCentrado = props => {

    const {chosenColor} = useContext(GlobalContext);
    
    const st = {
        backgroundColor: chosenColor[1],
        borderColor: chosenColor[2]
    };

    return (
        <div className="menu-centrado" style={st} >
            <h2> {props.children}</h2>
            <form onSubmit={props.method} >
                <SelectionC>
                    <OptionStyledC>Administrador </OptionStyledC>
                    <OptionStyledC>Vendedor </OptionStyledC>
                </SelectionC>
            <BotonDual exitMethod={props.exitMethod}>Cambiar Puesto</BotonDual>        
            </form>
        </div>
    )
}


export default MenuCentrado;
