import { useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)

    const location = useLocation()

    if(loading){
        return <div className='flex justify-center'>
        <RotatingLines
    strokeColor="red"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
  />
    </div>
    }


    if(user){
        return children;
    }



    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default PrivateRoute;