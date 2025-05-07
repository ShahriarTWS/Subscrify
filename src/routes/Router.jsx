import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SubscriptionContainer from "../components/SubscriptionContainer/SubscriptionContainer";
import SubscriptionDetails from "../pages/SubscriptionDetails";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../pages/Loading";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch('/item.json'),
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                path: '/',
                element: <SubscriptionContainer></SubscriptionContainer>,

            }
        ]
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
            {
                path: '/auth/profile',
                element: <Profile></Profile>,
            },
        ]
    },
    {
        path: '/subscription-details/:id',
        element: <PrivateRoute>
            <SubscriptionDetails></SubscriptionDetails>
        </PrivateRoute>,
        loader: () => fetch('/item.json'),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    },
])