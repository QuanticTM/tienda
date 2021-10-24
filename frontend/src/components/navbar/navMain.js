import { useContext, useState } from "react";
import { GlobalContext } from "../../logic/globalState";
import BD from "./BD.svg";
import NavMenu from "./navMenu";

const Navbar = () => {

    const { chosenColor } = useContext(GlobalContext);

    const [ isDisplayed, setDisplay] = useState(false);
    
    const st = {
        backgroundColor: chosenColor[1],
        borderColor: chosenColor[2]
    };

    const st1 = {
        height: "25px" 
    };
    
    const Logo = () => <img src={BD} className="logo" style={st1} />

    return ( 
        <>
            <div className="navbar-main" style={st} >
                <div onClick={() => setDisplay(!isDisplayed)} >
                    <Logo />
                </div>
            </div>
            {isDisplayed && <NavMenu ch={() => setDisplay(!isDisplayed)} /> }
        </>
    )
};

export default Navbar;
