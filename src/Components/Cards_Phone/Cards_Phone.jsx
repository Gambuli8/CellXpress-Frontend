import React from 'react'
import Card_Phone from '../Card_Phone/Card_Phone'
import style from "./Cards_Phone.module.css"
const Cards_Phone = ({Product}) => {
 return (
    <div className={style.contenedorCards}>
  {Product.map((p)=>
    <Card_Phone 
    id={p.id}
    name= {p.name}
    description ={p.description}
    image={p.image}
    key={p.id}
    />)}
    </div>
  )}
export default Cards_Phone