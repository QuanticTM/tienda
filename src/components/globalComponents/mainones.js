import { GlobalContext } from "../../logic/globalState";
import { useContext } from "react";

export const MainContainer = props => {

    const { tema } = useContext(GlobalContext);

    const st1 = {backgroundColor: tema.secundario};

    const st2 = {
        backgroundColor: tema.principal, 
        color: tema.letraPrincipal
        };
    const st3 = {borderColor: tema.letraSecundaria};

    return(

        <div className="main-wrapper" style={st1}>
            <div className="main-container" style={st2}>
                <div className="main-container interior" style={st3} >
                    {props.children}
                </div>
            </div>
        </div>
    )
}
