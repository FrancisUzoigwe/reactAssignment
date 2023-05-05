import {createBrowserRouter} from "react-router-dom" 
import App from "../App"
import Layout from "../Components/Block/Layout"
import About from "../Pages/About"
import HomePage from "../Pages/Homepage"
import Features from "../Pages/Features"
import Learn from "../Pages/Learn"
import Pricing from "../Pages/Pricing"
import Support from "../Pages/Support"


export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                path: "home",
                element: <HomePage/>
            },
            {
                index: true,
                path: "about",
                element: <About/>
            },
            {
                index: true,
                path: "features",
                element: <Features/>
            },
            {
                index: true,
                path: "learn",
                element: <Learn/>
            },
            {
                index: true,
                path: "pricing",
                element: <Pricing/>
            },
            {
                index: true,
                path: "support",
                element: <Support/>
            },
           
        ]
    }
])