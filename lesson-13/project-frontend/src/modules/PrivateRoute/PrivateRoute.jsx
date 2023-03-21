import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import {getAuth} from "../../redux/auth/auth-selectors";

const PrivateRoute = ()=> {
    const {isLogin, token} = useSelector(getAuth);

    if(!isLogin && token) {
        return <p>...Loading</p>
    }

    if(!isLogin && !token) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default PrivateRoute;