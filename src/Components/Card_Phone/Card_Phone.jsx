/* eslint-disable react/prop-types */
import style from "./Card.module.css"
import { Link } from "react-router-dom"

const Card_Phone = (props) => {
  return (
    <Link className={style.link} to={`/detailCard/${props.id}`}>
 <div className={style.containerCard}>
<h4>{props.id}</h4>
<h4>{props.name}</h4>
<h4>{props.description}</h4>
<img  className= {style.image} src={props.image} />
</div>
</Link>
)
}
export default Card_Phone