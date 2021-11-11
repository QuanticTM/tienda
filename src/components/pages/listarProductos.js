import { MainContainer, MainTable, TableCell, TableHeader} from "../globalComponents/mainones";
import { MainHeader } from "../globalComponents/forms";
import {useEffect, useState} from "react";

const ListarProductos = () => {

    const [allProducts, setAProd] = useState([]);
    const [actu, setActu ] = useState(false);

    useEffect(() => {
        fetch("http://localhost:4269/products/findall")
        .then(res => res.json())
        .then(data => setAProd(data))
        .catch(err => console.log(err))
    }, [])

    console.log(allProducts);

    const cells = allProducts.map(prod => {
        return <TableCell disponibility={prod.disponibility}>{prod.name}</TableCell>
    })
    return (
        <MainContainer>
            <MainHeader>Busca tu Producto</MainHeader>
            
            <MainTable>
                <TableHeader />
                <TableCell disponibility={true}> Pepe</TableCell> 
                {cells}
            </MainTable>
        </MainContainer>
    )
}

export default ListarProductos
