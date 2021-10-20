import { createContext, useState } from "react";



// global theme 


export const GlobalContext = createContext(null);



export const GlobalState = props => {
    

    // cambio de temas
    const Themes = {
        modoClaro:{
            principal: "#fff",
            secundario: "#ddd",
            letraPrincipal: "#111",
            letraSecundaria: "#333",
        },
        modoOscuro: {
            principal: "#232124",
            secundario: "#100f12",
            letraPrincipal: "#eee",
            letraSecundaria: "#fff",
        }
    };

    const [x, setTema ] = useState(false);
    const cambiarTema = () => setTema(!x); 
    const tema = !x ? Themes.modoOscuro : Themes.modoClaro;

    //modulo actual y rol del usuario
   
    const [modulo, cambiarModulo] = useState(0);
    const [rol, setRol] = useState(0);

    // cambio del color de acentuacion
    
    const [contraste, setContraste ] = useState(0);
    
    const listOfColors = [
        ["#c33","Rojo"],
        ["#31c282", "Verde"],
        ["#1193ee", "Azul"],
        ["#8123fe", "Morado"],
        ["#d62", "Naranja" ]
        ];

    const chosenColor = listOfColors[contraste][0] ;

    const contextoGeneral = {
        tema : tema,
        cambiarTema : cambiarTema,
        modulo: modulo, 
        cambiarModulo: cambiarModulo,
        rol : rol,
        setRol : setRol,
        contraste : contraste,
        setContraste : setContraste,
        chosenColor : chosenColor,
        listOfColors: listOfColors
    };

    return (
        <GlobalContext.Provider value={contextoGeneral}>
            {props.children}
        </GlobalContext.Provider>
    );
}
