/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import style from './formCart.module.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function FormCart() {

  const userId = useSelector((state) => state.userId);

  const navigate = useNavigate();
  
  const handlerPayment = () => {
    const payment = userId.paymentLink;
    const win = window.open(payment, "_blank");
    win.focus();
  }

  return (
    <div className={style.container}>
        <div className={style.form}>
            <div className={style.formHeader}>
                <h1>Formulario de compra</h1>

                <button onClick={handlerPayment}>
                  ir a pagar
                </button>
            </div>
        </div>     
    </div>
  )
}
