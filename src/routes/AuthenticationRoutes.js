import AuthLayout from "../layout/AuthLayout";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import ForgotPassword from "../auth/forgot-password/ForgotPassword";

const MainRoutes = {
    path: '/auth',
    element: <AuthLayout />,
    children: [
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'register',
            element: <Register />
        },
        {
            path: 'forgot-password',
            element: <ForgotPassword />
        },
    ]
};

export default MainRoutes;