import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth()
    const location = useLocation()

    console.log('Da Auth: ', auth)

    if (!auth?.accessToken) alert("Oops! Looks like you tried to go to a page you don't have access to! Redirecting you now...")
     
    return (
        auth?.accessToken
            ? <Outlet />
            : <Navigate to='/' state={{ from: location}} replace/>
    )
}

export default RequireAuth