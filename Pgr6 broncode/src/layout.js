import {Link, Outlet} from "react-router-dom";

export function Layout() {

    return <div>
        <header>
            <h1>Products</h1>
        </header>
            <div>
                <ul>
                    <li><Link to="/">all products</Link></li>
                    <li><Link to="create">new product</Link></li>
                </ul>
            </div>

        <div>
            <Outlet />
        </div>
    </div>
}