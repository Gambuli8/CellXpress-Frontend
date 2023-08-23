import style from "./DetailUser.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../context/authContext";
import { useParams,  } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOrderById, editPutUser, getUserById} from "../../Redux/Actions";
import { FaStar } from 'react-icons/fa'

const DetailUser = () => {
  const [rating, setRating ] = useState()





  // const star = useSelector((state) => state.star);
  // console.log("startttttttttttttttttt",star )
 

  const { id } = useParams();
  const { user } = useAuth();

  const [calificar, setcalificar] = useState({
    productId:"",
    nickname: "",
    comment: "",
    num: ""
  })
   

  const dispatch = useDispatch();

  const allOrderByID = useSelector((state) => state.orderById);

  const allUsuariosByID = useSelector((state) => state.allUsers);

  const [input, setInput] = useState({
    name: "",
    phone: "",
    id: id,
  });


  useEffect(() => {
    dispatch(getOrderById(id));
    dispatch(getUserById(id));
    setInput({
      name: allUsuariosByID.name,
      phone: allUsuariosByID.phone,
      id: id,
    });
  }, [dispatch, id]);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(editPutUser(input));
    console.log(allOrderByID.products)
   
 };
 const handleSubmitCalificar = (event) => {
  event.preventDefault()
 console.log("999999999999888888888888", calificar)
 setcalificar({
  productId:"",
  nickname: "",
  comment: "",
  num: ""
})

};

const onChangeCalificar= (eve)=>{
  setcalificar({
    ...calificar,
    [eve.target.name]: eve.target.value,
  });
}
  return (
    <div className={style.container}>
      <a className={style.btn_back} href="/home">
        Atras
      </a>
      <div className={style.containerEditUser}>
        <div>
          <img
            src={
              user && user.photoURL
                ? user.photoURL
                : "https://cdn-icons-png.flaticon.com/128/2986/2986624.png"
            }
            alt=""
            className={style.img}
          />

        </div>
        <form onSubmit={handleSubmit} className={style.formEditUser}>
          <label>Su usuario</label>
          <input
            type="text"
            name="name"
            className={style.input}
            placeholder={allUsuariosByID.name}
            onChange={handleChange}
          />
          <label>Su teléfono</label>
          <input
            type="number"
            name="phone"
            className={style.input}
            placeholder={
              allUsuariosByID.phone ? allUsuariosByID.phone : "ej: 3519887123"
            }
            onChange={handleChange}
          />
          <button className={style.btn_back}>Editar usuario</button>
        </form>
      </div>
      <h2>Ordenes de compras</h2>
      <div className={style.containerOrdenesCompras}>
        {allOrderByID.map((elemento) => {
          return (
            <div key={elemento._id} className={style.ordenCompra}>
      
              
              <div className={style.ordenDetail}>
                {elemento.products.map((e) => {
                  return (
                    
                    <ul key={e._id} className={style.containerProduct} onClick=
                    {()=>setcalificar({
                      productId: e.product._id,
                      nickname: elemento.userId,
                      num:"",
                      
                    })}>
                  
                     
                 
                      <img
                        src={e.product.image}
                        alt={e.product.title}
                        width="80px"
                        height="80px"
                      />

                      <li className={style.label}>{e.product.title}</li>
                      <li className={style.label}>{e.product.brand}</li>
                      <li className={style.label}>${elemento.total}</li>

                      
                      <div>
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
    <textarea name="comment" onChange={onChangeCalificar} ></textarea>
                      </div>
                      
                      <li className={style.label}>{e.quantity}</li>
                      <button onClick={handleSubmitCalificar}>Enviar</button>
                    </ul>
                    
                  );
                })}
              </div>
              
            </div>
          );
        })}
      </div>
      
    </div>
  );
};
export default DetailUser;