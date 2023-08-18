import style from "./DetailUser.module.css"
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../context/authContext"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsers } from "../../Redux/Actions";

const DetailUser = () => {

    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

    const { user } = useAuth();
    const data = useSelector((state) => state.allUsers);
    const {email} = useParams();
    const [userActive, setUserActive] = useState({});

    useEffect(() => {
        const foundUser = data.find((userData) => userData.email === user.email);
        setUserActive(foundUser || {});
    }, [data, email])

    const purchases = userActive.purchaseHistory
    const handlerClick = ()=>{
      
    }

    console.log("ususario activo", userActive)
    return (
        <div className={style.container}>
          <div>
            <h1>Name:{userActive.name} </h1>
            <p>Email:{userActive.email}</p>
            <p>phone:{userActive.phone} </p>
          </div>
          {purchases? <button onClick={hancdlerClick}>Purchase</button> : null}
        </div>
        
    )
};
export default DetailUser;
