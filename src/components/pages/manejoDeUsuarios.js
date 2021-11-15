import {useEffect, useState } from "react";
import { MainContainer, MainTable, TableHeader, TableUser } from "../globalComponents/mainones";
import MenuCentrado from "../globalComponents/menuCentrado";
import { MainHeader } from "../globalComponents/forms";

const ManejoDeUsuarios = () => {

    const [allUsers, setAUsers] = useState([]);
    const [actu, setActu ] = useState(false);
    const [page, setPage ] = useState(false);
    const [actualIndex, setIndex] = useState(null);


    useEffect(() => {
        fetch("http://localhost:4269/users/findall")
        .then(res => res.json())
        .then(data => setAUsers(data))
        .catch(err => console.log(err))
    }, [actu])

    function changeDisponibility(id) {
        
        const preparacion = {
            method: "POST",
            headers: {"Content-type": "application/json", "charset":"utf-8"},
            body: JSON.stringify({"id": id})
        }    
        fetch("http://localhost:4269/products/actualize", preparacion)
        .then(response => response.json())
        .then(data => console.log(data)) 
        .catch(err => console.log(err));
        setActu(!actu);
    }
    console.log(allUsers);

    const actualize = index => {
        setIndex(index);
        setPage(!page);
    } 

    const cells = allUsers.map((usr, i) => {
        return (
            <TableUser key={usr._id} 
                estado={usr.estado}
                redirect={() => actualize(i)}
                method={ () => changeDisponibility(usr._id) }>
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
            {page && <MenuCentrado exitMethod={() => setPage(!page)} >Cambiar papel</MenuCentrado>}
        </MainContainer>
    )
}


export default ManejoDeUsuarios;
