import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";

export function Product(props) {
    const deleteProduct = () => {
        fetch(props.note._links.self.href, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => props.productRefreshHandler())
            .catch((error) => console.log(error))
    }

    return <div>
        <h2>{props.note.title}</h2>
        <Link to={"products/" + props.note.id}>Details</Link>
        <Link to={"update/" + props.note.id}>Update</Link>
        <button onClick={deleteProduct}>Delete</button>
    </div>;
}