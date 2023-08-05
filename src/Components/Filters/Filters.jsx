
import { useDispatch } from "react-redux";
import {orderPhone, filterPhone, getProduct} from "../../Redux/Actions/"

const Filters = () => {
const dispatch = useDispatch()

const filterPhones = (event)=>{
  
   setTimeout(() => {
     dispatch(filterPhone(event.target.value)) 
   }, 790);
   dispatch(getProduct())
   
 }
 const orderPhones = (event) => {
  dispatch(orderPhone(event.target.value)) 
  }

  return (
    <div > Ordenamiento
     <div>
        <select  name="" id="" onChange={orderPhones}>
       <option defaultChecked value="asc">-</option>
       <option value="asc">Ascendente</option>
        <option value="des">Descendente</option>
        <option value="mayorprecio">Mayor Precio</option>
       <option value="menorprecio">Menor Precio</option>
        </select>
   </div>
<br />
   <div > Filtrado
        <select  name="" id="" onChange={filterPhones}>
       <option defaultChecked value="MOTOROLA">-</option>
       <option value="MOTOROLA">Motorola</option>
        <option value="SAMSUNG">Samsung</option>
        <option value="XIAOMI">Xiaomi</option>
       <option value="TECNO">Tecno</option>
        </select>
   </div>
    </div>
  );
};

export default Filters;





































// import React from 'react'
// import orderPhone from "../Filters/Filters"
// import { useDispatch, useSelector } from "react-redux";




// const Filters = () => {

//   const allProduct = useSelector((state) => state.allProduct);
//   console.log("************",allProduct)

//   const dispatch = useDispatch()
//   const orderPhones = (event) => {
    
//     dispatch(orderPhone(event.target.value))
//     console.log(event.target.value)
    
//   }

//   return (
//     <div>
//          <select  name="" id="" onChange={orderPhones}>
//         <option defaultChecked value="asc">-</option>
//         <option value="asc">Ascendente</option>
//         <option value="des">Descendente</option>
//         <option value="mayorprecio">Mayor Precio</option>
//         <option value="menorprecio">Menor Precio</option>
//         </select>
//     </div>
//   )
// }

// export default Filters

