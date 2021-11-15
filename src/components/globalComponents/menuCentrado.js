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

    const opciones = props.items.map((item, i) => {
        return <OptionStyledC key={i} value={item}>{item}</OptionStyledC>
    });

    return (
        <div className="menu-centrado" style={st} >
            <h2> {props.children}</h2>
            <form onSubmit={props.method} >
                <SelectionC value={props.value} method={props.setter} >
                    {opciones}
                </SelectionC>
            <BotonDual exitMethod={props.exitMethod}>{props.methodName}</BotonDual>        
            </form>
        </div>
    )
}


export default MenuCentrado;
