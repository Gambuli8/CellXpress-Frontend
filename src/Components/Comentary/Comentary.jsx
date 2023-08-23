import { useState, useEffect } from "react";
import StarRating from "../StarRating/StarRating";

const Comentary = ({ calificar }) => {
  const [comentario, setComentario] = useState({
    productId: "",
    nickname: "",
    comment: "",
    num: "",
  });

  useEffect(() => {
    setComentario({
      productId: calificar.productId,
      nickname: calificar.nickname,
      comment: "",
      num: calificar.num,
    });
  }, []);

  console.log("proppppppsssss", calificar.productId);

  console.log("comentarioriorioriroir", comentario);

  const onChangeCalificar = (eve) => {
    eve.preventDefault();
    setComentario({
      ...comentario,
      [eve.target.name]: eve.target.value,
    });
  };

  return (
    <div>
      {/* <StarRating /> */}
      <textarea onChange={onChangeCalificar} name="comment"></textarea>
    </div>
  );
};
export default Comentary;
