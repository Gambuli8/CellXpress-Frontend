/* eslint-disable react/prop-types */
import Card_Phone from "../Card_Phone/Card_Phone";
import style from "./Cards_Phone.module.css";
import Swal from "sweetalert2";
const Cards_Phone = ({ Product }) => {
  return (
    <div className={style.contenedorCards}>
      {Product.map((p) => (
        <Card_Phone
          id={p._id}
          title={p.title}
          price={p.price}
          brand={p.brand}
          description={p.description}
          image={p.image}
          rating={p.rating}
          count={p.count}
          key={p._id}
        />
      ))}
    </div>
  );
};
export default Cards_Phone;
