import { useContext, useState } from "react";
import { GlobalContext } from "../../logic/globalState";
import BD from "./BD.svg";
import NavMenu from "./navMenu";

const Navbar = () => {

    const { tema } = useContext(GlobalContext);
    const [ isDisplayed, setDisplay] = useState(false);
    
    const st = {backgroundColor: tema.principal};
    const st1 = {height: "25px"};
    
    const Logo = () => <img src={BD} className="logo" style={st1} />

    return ( 
        <>
            <div className="navbar-main" style={st} >
                <div onClick={() => setDisplay(!isDisplayed)} >
                    <Logo />
                </div>
            </div>
            {isDisplayed && <NavMenu> <p>Drogas</p></NavMenu> }
        </>
    )
};

export default Navbar;
