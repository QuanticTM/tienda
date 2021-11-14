import { MainContainer, MainTable, TableCell, TableHeader} from "../globalComponents/mainones";
import { MainHeader } from "../globalComponents/forms";
import {useEffect, useState} from "react";
import ActualizarProductos from "./actualizarProductos";

const ListarProductos = () => {

    const [allProducts, setAProd] = useState([]);
    const [actu, setActu ] = useState(false);
    const [page, setPage ] = useState(false);
    const [actualIndex, setIndex] = useState(null);


    useEffect(() => {
        fetch("http://localhost:4269/products/findall")
        .then(res => res.json())
        .then(data => setAProd(data))
        .catch(err => console.log(err))
    }, [actu])

    function changeDisponibility(id) {
        
        const preparacion = {
            method: "POST",
            headers: {"Content-type": "application/json", "charset":"utf-8"},
            body: JSON.stringify({"id": id})
        }    
        fetch("http://localhost:4269/products/change-disponibility", preparacion)
        .then(response => response.json())
        .then(data => console.log(data)) 
        .catch(err => console.log(err));
        setActu(!actu);
    }
    console.log(allProducts);

    const actualize = index => {
        setIndex(index);
        setPage(!page);
    } 

    const cells = allProducts.map((prod, i) => {
        return (
            <TableCell key={prod._id} 
                disponibility={prod.disponibility}
                redirect={() => actualize(i)}
                method={ () => changeDisponibility(prod._id) }>
                {prod.name}
            </TableCell>
       
        )
    })
    return !page  ?(
        <MainContainer>
            <MainHeader>Busca tu Producto</MainHeader>
            
            <MainTable>
                <TableHeader />
                <TableCell method={() => setPage(!page)} disponibility={true}> Pepe</TableCell> 
                {cells}
            </MainTable>
        </MainContainer>
    ) : (
        <ActualizarProductos volver={() => setPage(false)} prod={allProducts[actualIndex]} />

    )


}

export default ListarProductos
