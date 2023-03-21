import {useState, useEffect} from "react";

import { getAllProducts, deleteProduct } from "../../shared/api/products";

const BuyList = ()=> {
    const [products, setProducts] = useState([]);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(()=> {
        const fetchProducts = async()=> {
            try {
                const data = await getAllProducts();
                setProducts(data);
            }
            catch({response}) {
                console.log(response.data.message);
            }
        }
        fetchProducts();
    }, []);

    useEffect(()=> {
        const fetchDeleteProduct = async()=> {
            try {
                await deleteProduct(deleteId);
                setProducts(prevProducts => prevProducts.filter(({id}) => id !== deleteId));
            }
            catch({response}) {
                console.log(response.data.message);
            }
        }
        if(deleteId) {
            fetchDeleteProduct();
        }
    }, [deleteId])

    const elements = products.map(({id, title, price}) => (
        <li key={id}>
            {title} - {price}$. <button onClick={()=> setDeleteId(id)} type="button">Delete</button>
        </li>
    ));

    return (
        <ol>
            {elements}
        </ol>
    )
}

export default BuyList;