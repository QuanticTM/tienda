import { createContext, useState } from "react";



// global theme 


export const GlobalContext = createContext(null);



export const GlobalState = props => {
    

    // cambio de temas
    const Themes = {
        modoClaro:{
            principal: "#ffe",
            secundario: "#eed",
            letraPrincipal: "#111",
            letraSecundaria: "#333",
        },
        modoOscuro: {
            principal: "#15151b",
            secundario: "#20202c",
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
    const ListaDeRoles = [
        "ninguno",
        "pendiente",
        "vendedor",
        "admin"
    ]

    // cambio del color de acentuacion
    
    const [contraste, setContraste ] = useState(0);
    
    const listOfColors = [
        ["#c33","Rojo", "#d44","#a00"],
        ["#51b252", "Verde", "#62c363", "#2f9030"  ],
        ["#4183ee", "Azul", "#5294ff", "#3072dd" ],
        ["#9183fe", "Morado", "#9f94ff", "#7062dc"],
        ["#c63", "Naranja", "#d74", "#a41" ]
        ];

    const chosenColor = [
        listOfColors[contraste][0],
        listOfColors[contraste][2],
        listOfColors[contraste][3]
    ];

    const contextoGeneral = {
        tema : tema,
        cambiarTema : cambiarTema,
        modulo: modulo, 
        cambiarModulo: cambiarModulo,
        rol : rol,
        setRol : setRol,
        ListaDeRoles: ListaDeRoles,
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
