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

export const MainTable = props => {

    return(
        <div className="main-table">
            {props.children}
        </div>
    )
}

export const TableCell = props => {

    const { chosenColor } = useContext(GlobalContext);
    const st = {borderColor: chosenColor[1]};

    return (
        <>
            <div className="table-cell" style={st} onClick={props.redirect}>
                <p>{props.children}</p>
            </div>
            <div className="table-cell" style={st} onClick={props.method}>
                <p>{props.disponibility ? "En Stock" : "Fuera de Stock"}</p>
            </div>
            
        </>

    )
}

export const TableUser = props => {

    const { chosenColor } = useContext(GlobalContext);
    const st = {borderColor: chosenColor[1]};

    return (
        <>
            <div className="table-cell" style={st} onClick={props.redirect}>
                <p>{props.children}</p>
            </div>
            <div className="table-cell" style={st} onClick={props.method}>
                <p>{props.estado}</p>
            </div>
            
        </>

    )
}
export const TableHeader = props => {

    const { chosenColor } = useContext(GlobalContext);
    const st = {borderColor: chosenColor[1]};

    return (
        <>
            <div className="table-cell head1" style={st}>
                <p>{props.head1}</p>
            </div>
            <div className="table-cell head2" style={st} >
                <p>{props.head2}</p>
            </div>
            
        </>

    )
}
