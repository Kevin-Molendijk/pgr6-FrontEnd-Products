import {useState} from "react";
import {useNavigate} from "react-router-dom";

const URI_COLLECTION = "https://docent.cmi.hro.nl/bootb/demo/notes"

export function NewProduct(props) {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        title: "",
        body: "",
        author: ""
    })

    const saveProduct = (event) => {
        event.preventDefault()

        fetch(URI_COLLECTION, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then((response) => props.productRefreshHandler())
            navigate('/')
    }

    const onChangeHandler = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })
    }

    return <section>
        <h2>NEW PRODUCT YEAAAA</h2>
        <form>
            <input type="text" value={product.title} name="title" onChange={onChangeHandler}/><br/>
            <input type="text" value={product.body} name="body" onChange={onChangeHandler}/><br/>
            <input type="text" value={product.author} name="author" onChange={onChangeHandler}/><br/>
            <button onClick={saveProduct}>Save</button>
        </form>
    </section>;
}
