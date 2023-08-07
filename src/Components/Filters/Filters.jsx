import { useDispatch } from "react-redux";
import {getfilters, orderPhone} from "../../Redux/Actions/"
import { useState } from "react";
import style from "./Filters.module.css"

const Filters = () => {

const dispatch = useDispatch()


  const [input, setInput] = useState({
    brand: "",
    minPrice: "",
    maxPrice: ""
    
  })


  const handleSubmit = (event) => {
    event.preventDefault()
   dispatch(getfilters(input))
  }

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
   
    
  }

  const orderPhones = (event) => {
    dispatch(orderPhone(event.target.value)) 
    }
  return (
    <div className={style.container}>
    <form onSubmit={handleSubmit}> 
         <div className={style.containerMarca}> 

         <div > 
        <select className={style.select} name="brand" onChange={handleChange} required>
        <option defaultChecked value="">Marca</option>
        <option value="APPLE">Apple</option>
            <option value="MOTOROLA">Motorola</option>
            <option value="SAMSUNG">Samsung</option>
            <option value="SONY">Sony</option>
            <option value="TECNO">Tecno</option>
            <option value="HUAWEI">Huawei</option>
            <option value="XIAOMI">Xiaomi</option>Realme
            <option value="REALME">Realme</option>
       </select>
       
   </div>
   <div>
       <input  className={style.select} type="number" name="minPrice" onChange={handleChange}  placeholder="Precio Minimo" />
     
       <input className={style.select} type="number"  name="maxPrice" onChange={handleChange} placeholder="Precio Maximo" />
       
   </div>
   <button >Buscar</button>
   </div>
   
<div className={style.container}>
        <select  onChange={orderPhones}>
       <option defaultChecked value="asc">-</option>
       <option value="asc">A-Z</option>
        <option value="des">Z-A</option>
        <option value="mayorprecio">Mayor Precio</option>
       <option value="menorprecio">Menor Precio</option>
        </select>
   </div>

    </form>
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

