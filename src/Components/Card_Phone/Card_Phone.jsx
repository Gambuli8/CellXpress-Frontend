import React from 'react'
import style from "./Card.module.css"

const Card_Phone = (props) => {
console.log("AYUDA", props)
  return (
 <div className={style.containerCard}>
<h4>{props.id}</h4>
<h4>{props.name}</h4>
<h4>{props.price}</h4>
<h4>{props.description}</h4>
<img  className= {style.image} src={props.image} />
</div>
)
}
export default Card_Phone
