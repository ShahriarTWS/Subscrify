import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        loader: ()=>fetch('item.json'),
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/register',
                element: <Register></Register>,
            },
        ]
    },
    {
        path: '/*',
        element: <h2>Error</h2>
    },
])