/* eslint-disable react/prop-types */
import { useAuth } from "../../context/authContext"
import { Navigate } from "react-router-dom";
import { getUsers } from '../../Redux/Actions';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export const ProtectedRoute = ({children})=>{
    const {user, loading} = useAuth();
    const allUsers = useSelector((state) => state.allUsers);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUsers());
      }, [user, dispatch]);

    const userParam = user && allUsers.find((userParam) => userParam.email === user.email);
    
    if (loading) return <h1>Cargando...</h1>
    if (!user) return <Navigate to="/login" />
    if(userParam){
        if(!userParam?.isActive) {
            Swal.fire({
                title: 'Usuario inactivo',
                text:'El usuario no se encuentra activo.',
                icon:"error",
            })
            navigate('/banned')
        }
    } 
    console.log(userParam);
    return <>{children}</>;
}