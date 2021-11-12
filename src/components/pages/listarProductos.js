import { MainContainer, MainTable, TableCell, TableHeader} from "../globalComponents/mainones";
import { MainHeader } from "../globalComponents/forms";
import {useEffect, useState} from "react";
import ActualizarProductos from "./actualizarProductos";

const ListarProductos = () => {

    const [allProducts, setAProd] = useState([]);
    const [actu, setActu ] = useState(false);
    const [page, setPage ] = useState(false);
    const [actualId, setId] = useState("");


    useEffect(() => {
        fetch("http://localhost:4269/products/findall")
        .then(res => res.json())
        .then(data => setAProd(data))
        .catch(err => console.log(err))
    }, [actu])

    console.log(allProducts);

    const cells = allProducts.map(prod => {
        return <TableCell key={prod._id} disponibility={prod.disponibility}>{prod.name}</TableCell>
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
        <ActualizarProductos id="" />

    )


}

export default ListarProductos
