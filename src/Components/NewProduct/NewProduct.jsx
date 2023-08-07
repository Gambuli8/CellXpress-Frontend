import React, { useState } from "react";
import { postProduct } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import { validate } from "../Validate/Validate";
import style from "./NewProduct.module.css";

const NewProduct = () => {
  //if (user.admin) {

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    price: "",
    description: "",
    brand: "",
    image: "",
    count: "",
    rating: [],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    //? Manejo del input
    const { name, value } = event.target;
    const error = validate(name, value);
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      //? Manejo de errores
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(input);
    console.log(input);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(postProduct(input));
      setInput({
        title: "",
        price: "",
        description: "",
        brand: "",
        image: "",
        rating: [
          {
            rate: 0,
            count: 0,
          },
        ],
        count: "",
      });
    }
  };
  /*
        const [image, setImage] = useState("");
    
        const CloudImage = async (e) => {
            e.preventDefault();
            try {
                const selectedFiles = e.target.files;
                const data = new FormData();
                data.append("file", selectedFiles[0]);
                data.append("upload_preset", "Activities");
                const res = await fetch(
                    "https://api.cloudinary.com/v1_1/djqwbu0my/upload",
                    {
                        method: "POST",
                        body: data,
                    }
                );
                const file = await res.json();
                setImage(file.secure_url);
                console.log(file.secure_url);
            } catch (error) {
                console.log(error);
            }
        };*/

  return (
    <div className={style.back}>
      <a href="/home" className={style.buttonBack}>
        Volver
      </a>
      <div className={style.container}>
        <form className={style.inputContainer} onSubmit={handleSubmit}>
          <h2 className={style.titulo}>Añadir Producto</h2>
          <label className={style.label}>Titulo</label>
          <input
            className={style.input}
            type="text"
            name="title"
            onChange={handleChange}
            value={input.title}
          />
          {errors.title && <p className={style.error}>{errors.title}</p>}
          <label className={style.label}>Precio</label>
          <input
            className={style.input}
            type="number"
            name="price"
            onChange={handleChange}
            value={input.price}
          />
          {errors.price && <p className={style.error}>{errors.price}</p>}
          <label className={style.label}>Descripción</label>
          <textarea
            className={style.descripcion}
            type="text-area"
            name="description"
            onChange={handleChange}
            value={input.description}
          />
          {errors.description && (
            <p className={style.error}>{errors.description}</p>
          )}
          <label className={style.label}>Marca</label>
          <input
            className={style.input}
            type="text"
            name="brand"
            on
            onChange={handleChange}
            value={input.brand.toUpperCase()}
          />
          {errors.brand && <p className={style.error}>{errors.brand}</p>}
          <label className={style.label}>Imagen</label>
          <input
            className={style.input}
            type="text"
            name="image"
            onChange={handleChange}
            value={input.image}
          />
          <label className={style.label}>Stock</label>
          <input
            className={style.input}
            type="number"
            name="count"
            onChange={handleChange}
            value={input.count}
          />
          {errors.count && <p className={style.error}>{errors.count}</p>}
          <button className={style.button} type="submit">
            Crear
          </button>
        </form>
        <div className={style.inputContainer}>
          <h2 className={style.titulo}>{input.title}</h2>
          <img src={input.image} className={style.img} alt={input.title} />

          <p className={style.label}>Marca:{input.brand} </p>
          <p className={style.label}>Stock:{input.count} </p>
          <p className={style.label}>${input.price} </p>
        </div>
        <div className={style.inputContainer}>
          <p className={style.label}>{input.description} </p>
        </div>
      </div>
    </div>
  );
  //}
};

export default NewProduct;
