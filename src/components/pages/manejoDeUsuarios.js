import {useEffect, useState } from "react";
import { MainContainer, MainTable, TableHeader, TableUser } from "../globalComponents/mainones";
import MenuCentrado from "../globalComponents/menuCentrado";
import { MainHeader } from "../globalComponents/forms";
import useInput from "./useInput";

const ManejoDeUsuarios = () => {

    const [allUsers, setAUsers] = useState([]);
    const [actu, setActu ] = useState(false);
    const [page, setPage ] = useState(false);
    const [actualIndex, setIndex] = useState(null);
    const [rolOrState, setThis] = useState(false); 
    const [rol, setRol] = useInput("");
    const [estado, setEstado] = useInput("");

    useEffect(() => {
        fetch("http://localhost:4269/users/findall")
        .then(res => res.json())
        .then(data => setAUsers(data))
        .catch(err => console.log(err))
    }, [actu])

    const itemsDeEstado = ["no autorizado","pendiente","no pendiente"];
    const itemsDeRol = ["administrador", "vendedor"]; 

    const actualizeUser = async (e) => {


        const bodyP = rolOrState ? {
            "id": allUsers[actualIndex]._id,
            "rol": rol,
        } : {
            "id": allUsers[actualIndex]._id,
            "estado": estado
        };

        const preparacion = {
            method: "POST",
            headers: {"Content-type": "application/json", "charset":"utf-8"},
            body: JSON.stringify(bodyP)
        };

        fetch("http://localhost:4269/users/actualize", preparacion)
        .then(response => response.json())
        .then(data => console.log(data)) 
        .catch(err => console.log(err))
        setActu(!actu);
    /*
        };
        if(isRol){
            preparacion = {
            }   
        }
        else
        {

        }
    }
    */
    }
    const MenusManUsr = () => {
        if(allUsers.length !== 0)
        {
            return rolOrState ? (
                <MenuCentrado 
                    value={rol}
                    setter={setRol}
                    items={itemsDeRol}
                    method={() => actualizeUser()}
                    methodName={"Cambiar de rol"}
                    exitMethod={() => setPage(!page)} >
                    Cambiar Rol de {allUsers[actualIndex].name}
                </MenuCentrado>)
                :(
                <MenuCentrado 
                    value={estado}
                    setter={setEstado}
                    items={itemsDeEstado}
                    method={() => actualizeUser()}
                    methodName={"Cambiar de estado"}
                    exitMethod={() => setPage(!page)} >
                    Cambiar Estado de {allUsers[actualIndex].name}
                </MenuCentrado>
            )
        }
    }
    const actualize = (index, deploy) => {
        setIndex(index);
        setThis(deploy);
        setPage(!page);
    } 

    const cells = allUsers.map((usr, i) => {
        return (
            <TableUser key={usr._id} 
                estado={usr.estado}
                redirect={() => actualize(i, true)}
                method={ () => actualize(i, false) }>
                {usr.name}
            </TableUser>
       
        )
    })
    return (
        <MainContainer>
            <MainHeader>Busca los Usuarios</MainHeader>
            
            <MainTable>
                <TableHeader head1="Nombre" head2="Estado" />
                {cells}
            </MainTable>
            {page && <MenusManUsr/>}
        </MainContainer>
    )
}


export default ManejoDeUsuarios; 
