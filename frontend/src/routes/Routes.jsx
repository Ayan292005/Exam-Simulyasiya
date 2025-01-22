import Add from "../pages/add"
import Details from "../pages/details"
import Favorites from "../pages/favorites"
import Home from "../pages/home"
import Products from "../pages/products"
import UserRoot from "../pages/UserRoot"


const Routes = [
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/add",
                element: <Add />,
            },
            {
                path: "/favorites",
                element: <Favorites />,
            },
            {
                path: "/products/:id",
                element: <Details />,
            }
        ]
    }
]

export default Routes