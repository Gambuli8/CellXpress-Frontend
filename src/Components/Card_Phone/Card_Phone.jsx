/* eslint-disable react/prop-types */
import style from "./Card.module.css"
<<<<<<< HEAD
import { Link } from "react-router-dom"

=======
>>>>>>> bc8ff0eb37d458ecf799cd9c490cabe56b1f8fc5
const Card_Phone = (props) => {
  return (
    <Link className={style.link} to={`/detailCard/${props.id}`}>
 <div className={style.containerCard}>
{/* <h4>{props.id}</h4> */}
<h4>{props.title}</h4>
<h4>{props.price}</h4>
<h4>{props.brand}</h4>
{/* <h4>{props.description}</h4> */}

<h4>{props.count}</h4>
<img  className= {style.image} src={props.image} />
</div>
</Link>
)
}
export default Card_Phone
