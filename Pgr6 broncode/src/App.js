import {useEffect, useState} from "react";
import {Product} from "./Product";
import {NewProduct} from "./newProduct";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./layout";
import {ProductDetail} from "./ProductDetail";
import {UpdateProduct} from "./updateProduct";

const URI_COLLECTION = "https://docent.cmi.hro.nl/bootb/demo/notes"
//http://145.24.222.26:8000/products
//https://docent.cmi.hro.nl/bootb/demo/notes

export function App() {
    const [products, setProducts] = useState([]);

    function loadProducts() {
        fetch(URI_COLLECTION, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => setProducts(result.items))
            .catch((error) => console.log(error))
    }

    const showProducts = products.map((value, key) =>
        <Product key={value.id} note={value} productRefreshHandler={loadProducts}/>)

    useEffect( () => {
        loadProducts()
    }, [])

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={showProducts}/>
                <Route path="create" element={<NewProduct productRefreshHandler={loadProducts}/>} />
                <Route path="products/:id" element={<ProductDetail />}/>
                <Route path="update/:id" element={<UpdateProduct productRefreshHandler={loadProducts}/>} />
            </Route>
        </Routes>
    </BrowserRouter>;
}
