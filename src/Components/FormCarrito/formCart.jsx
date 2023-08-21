import style from './formCart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers, postUserId } from '../../Redux/Actions';
import { useAuth } from '../../context/authContext';

export default function FormCart() {
  const dispatch = useDispatch();
  const user = useAuth().user;
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [user, dispatch]);

  const userParam = user && allUsers.find((userParam) => userParam.email === user.email);
  const userId = userParam ? userParam._id : null;

  const handlePayment = async () => {
    if (userId) {
      try {
        const response = await dispatch(postUserId(userId)); // Ejecuta la acción y obtiene la respuesta
  
        const paymentLink = response.data.paymentLink; // Accede a la propiedad paymentLink de la respuesta
        console.log(paymentLink);
  
        if (paymentLink) {
          window.open(paymentLink, "_blank");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  
  
  

  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.formHeader}>
          <h1>Formulario de compra</h1>
          <button onClick={handlePayment}>ir a pagar</button>
        </div>
      </div>
    </div>
  );
}
