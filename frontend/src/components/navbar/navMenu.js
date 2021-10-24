import { useContext, useState } from "react";
import { GlobalContext } from "../../logic/globalState";
import {NavItem, NavColor} from "./navItems";

const OptionsNav = () => {

    const [indexM, setM] = useState(0)
    const { cambiarTema, listOfColors, setContraste} =  useContext( GlobalContext );

    const mapping = a => {
        let x = [];
        for(let i = 0; i < a.length; i++){
            x.push(
                <NavColor method={() => setContraste(i)} color={a[i][0]}>
                    {a[i][1]}
                </NavColor>
            );
        } 
        return x;
    }

    switch(indexM)
    {
        default:
            return (
                <>
                    <NavItem method={cambiarTema}  >Cambiar de Tema</NavItem> 
                    <NavItem method={() => setM(1)}  >Cambiar Color</NavItem> 
                </>
            )
        case 1:
            
            const col = mapping(listOfColors);

            return (
                <>
                    {col}
                    <NavItem method={() => setM(0)}  >Volver</NavItem> 
                </>
            );

    }

}


const NavMenu = props => {

    const {tema, chosenColor} = useContext(GlobalContext);
    const st = {
        backgroundColor: chosenColor[1] ,
        color: "#fff",
        borderColor: tema.secundario
    };
    
    return (  
        <div className="options-wrapper nav-menu" style={st} > 
            <OptionsNav />
            <NavItem method={props.ch}> Cerrar </NavItem>
        </div>
    )
}

export default NavMenu;


