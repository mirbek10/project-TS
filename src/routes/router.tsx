
import { createBrowserRouter } from "react-router-dom";
import LaoyOut from "../Components/Layout/LaoyOut";
import Users from "../Page/home/User";
import UserDetails from "../Page/UsersDetail/UserDetails";




const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <LaoyOut/>,
        children: [
            {
                element:<Users/>,
                path: "/",
            },
            {
                element:<UserDetails/>,
                path: "/user/:id",
            },

            
        ]
    }
]
    )
    export default myRouter;