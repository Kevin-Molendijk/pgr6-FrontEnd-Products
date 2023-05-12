import {Link, Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const URI_COLLECTION = "https://docent.cmi.hro.nl/bootb/demo/notes"

export function ProductDetail() {
    const params = useParams()

    const [product, setProduct] = useState(null)

    function loadProduct() {
        fetch(URI_COLLECTION + "/" + params.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => setProduct(result))
            .catch((error) => console.log(error))
    }

    useEffect( () => {
        loadProduct()
    }, [])

    return <section>
        <h1>{product && product.title}</h1>
        <p>{product && product.body}</p>
        <p>{product && product.author}</p>
    </section>
}