import { useDispatch } from "react-redux";
import { getfilters, orderPhone } from "../../Redux/Actions/";
import { useState } from "react";
import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    brand: "",
    minPrice: "",
    maxPrice: "",
    ram: "",
    camera: "",
    screenSize: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getfilters(input));
  };
  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const orderPhones = (event) => {
    dispatch(orderPhone(event.target.value));
  };

  const clearFilters = () => {
    setInput({
      brand: "",
      minPrice: "",
      maxPrice: "",
      ram: "",
      camera: "",
      screenSize: "",
    });
    console.log(input);
  };
  //     const handleSubmitRam = (event) => {
  //       event.preventDefault()
  //      dispatch(getfiltersram(event.target.value))
  //  }
  //  const handleSubmitPixeles = (event) => {
  //   event.preventDefault()
  //  dispatch(getfilterspixeles(event.target.value))
  // }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div className={style.containerMarca}>
          <div>
            <select
              className={style.select}
              name="brand"
              onChange={handleChange}
              value={input.brand}
            >
              <option defaultChecked value="">
                Marca
              </option>
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
          <div className={style.inputs}>
            <input
              className={style.input}
              type="number"
              name="minPrice"
              onChange={handleChange}
              placeholder="Precio Minimo"
            />

            <input
              className={style.input}
              type="number"
              name="maxPrice"
              onChange={handleChange}
              placeholder="Precio Maximo"
            />
          </div>
        </div>

        <div className={style.filtercontainer}>
          <select onChange={orderPhones}
          className={style.select}>
            <option defaultChecked value="asc">
              -
            </option>
            <option value="asc">A-Z</option>
            <option value="des">Z-A</option>
            <option value="mayorprecio">Mayor Precio</option>
            <option value="menorprecio">Menor Precio</option>
          </select>
        </div>
        <div className={style.filtercontainer}>
          <div>
            <select 
            onChange={handleChange}
            className={style.select} 
            name="ram" 
            value={input.ram}
            >
              <option defaultChecked value=""
              >
                Seleccione Ram
              </option>
              <option value="2 GB DE RAM">2 Gb </option>
              <option value="4 GB DE RAM">4 Gb </option>
              <option value="6 GB DE RAM">6 Gb </option>
              <option value="8 GB DE RAM">8 Gb</option>
              <option value="12 GB DE RAM">12 Gb </option>
              <option value="16 GB DE RAM">16 Gb </option>
            </select>
          </div>
          <div>
            <select 
            onChange={handleChange} 
            name="camera" 
            value={input.camera}
            className={style.select}
            >
              <option defaultChecked value="">
                Seleccione Resolucion
              </option>
              <option value="2 MP">2 Mp</option>
              <option value="5 MP">5 Mp </option>
              <option value="8 MP">8 Mp </option>
              <option value="12 MP">12 Mp </option>
              <option value="16 MP">16 Mp </option>
              <option value="20 MP">20 Mp </option>
              <option value="32 MP">32 Mp </option>
              <option value="48 MP">48 Mp </option>
              <option value="64 MP">64 Mp </option>
              <option value="108 MP">108 Mp </option>
            </select>
          </div>
        </div>
        <div className={style.btns}>
          <button className={style.button} >Buscar</button>
          <button 
          onClick={clearFilters}
          className={style.button}
          >Limpiar Filtros</button>
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
