import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import style from "./StartRating.module.css";
import { useDispatch, useSelector } from "react-redux";
import { star } from "../../Redux/Actions";

const StarRating = () => {
  const reviewsUser = useSelector((state)=> state.getreviewsuser)
  const num = reviewsUser
  console.log("///////////////////", reviewsUser)

  const dispatch = useDispatch();
  const [rating, setRating] = useState();
  useEffect(() => {
    dispatch(star(rating));
  }, [rating]);

  return (
    <div>
      Calificacion
      <br />
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              className={style.input}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className={style.star}
              color={ratingValue <= rating ? "#ffc107" : "#00FFFF"}
            />
          </label>
        );
      })}
    </div>
  );
};
export default StarRating;
