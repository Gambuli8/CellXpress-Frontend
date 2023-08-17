import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import style from "./StartRating.module.css"
import { useDispatch } from 'react-redux'
import {calificar} from "../../Redux/Actions"


const StarRating = () => {
const dispatch = useDispatch()
const [rating, setRating ] = useState()


useEffect(()=>{
  dispatch(calificar(rating))
}, [rating])

  return (
    <div >
      Calificacion
        <br />
        {[... Array(5)].map((star, i) =>{
            const ratingValue = i +1;
            return (
                <label>
                 <input 
                className={style.input}
                type="radio" 
                name='rating' 
                value={ratingValue}
                onClick={()=>setRating(ratingValue)}
                />
                <FaStar  className={style.star} 
                color={ratingValue <= rating ? "#ffc107" : "#00FFFF"}
                />
                </label>
            )
            
        })}
       
    </div>
    
  )
}
export default StarRating
