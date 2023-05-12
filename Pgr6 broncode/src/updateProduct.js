import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {productDetail} from "./ProductDetail"

const URI_COLLECTION = "https://docent.cmi.hro.nl/bootb/demo/notes"

export function UpdateProduct(props) {
    const params = useParams()
    const navigate = useNavigate();

    const saveProduct = (event) => {
        event.preventDefault()

        fetch(URI_COLLECTION + "/" + params.id,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then((response) => props.productRefreshHandler())
        navigate('/')
    }


    //ik snap het niet, id werkt wel maar de rest niet.
    const [product, setProduct] = useState( {
        title: params.title,
        body: params.body,
        author: params.author
    })

    const onChangeHandler = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })
    }

    return <section>
        <h2>Update PRODUCT YEAAAA</h2>
        <form>
            <input type="text" value={params.title} name="title" onChange={onChangeHandler}/><br/>
            <input type="text" value={product.body} name="body" onChange={onChangeHandler}/><br/>
            <input type="text" value={product.author} name="author" onChange={onChangeHandler}/><br/>
            <button onClick={saveProduct}>Save</button>
        </form>
    </section>;
}