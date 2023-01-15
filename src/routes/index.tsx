import LoginPage from "../pages/Login";
import {Navigate} from "react-router-dom";
import Home from "../pages/Home";

// TODO read from UserContext
let isAuthorized = true;

const routes = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
      path: '/',
      element: isAuthorized
          ? <Navigate to='/home' />
          : <Navigate to='/login' />
    },
    {
        path: '/home',
        element: <Home />
    }
]

export default routes;