import React, { useState } from "react";
import { postProduct } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import { validate } from "../Validate/Validate";
import style from "./NewProduct.module.css";
import useLocalStorage from "../Hooks/useLocalStorage";

const NewProduct = () => {
  //if (user.admin) {

  const [imageURL, setImageURL] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
 
  const [input, setInput] = useLocalStorage("input",{
    title: "",
    price: "",
    description: "",
    brand: "",
    count: "",
    rating: [],
    screenSize: "",
    cameraInches: "",
    ram: "",
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
  //! Envio de inputs
  const handleSubmit = async (event) => {
    // event.preventDefault();
    const validationErrors = validate(input);
    console.log("inputs antes de handleimageupload", input);
    if (Object.keys(validationErrors).length === 0) {
      try {
        console.log("imageURL despues handleimageupload", imageURL);
        dispatch(postProduct({ ...input, image: imageURL }));
        setInput({
          title: "",
          price: "",
          description: "",
          brand: "",
          image: "",
          screenSize: "",
          cameraInches: "",
          ram: "",
          rating: [
            {
              rate: 0,
              count: 0,
            },
          ],
          count: "",
        });
        setImageURL(null);
        setSelectedImage(null);
      } catch (error) {
        console.error("Error al enviar el form");
      }
    }
  };
  //cloudinary
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setSelectedImage(selectedFile);
    }
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", "Activities");
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/djqwbu0my/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        if (response.ok) {
          console.log(response);
          const data = await response.json();
          console.log("dataaaa", data.secure_url);
          setImageURL(data.secure_url);
          console.log("Se subio perri", data.secure_url);
        } else {
          console.error("Error al cargar la imagen");
        }
      } catch (error) {
        console.error("Error al cargar la imagen", error);
      }
    }
  };

  const previewImage = () => {
    if (selectedImage) {
      return (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt={input.title}
          className={style.img}
        />
      );
    }
  
    return <p>Selecciona una imagen</p>;
  };

const handleEnviar = ()=>{
  handleImageUpload()
  setTimeout(() => {
    handleSubmit()
  }, 10000);
}

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
            required
          />
          
            
          

          <label className={style.label}>Precio</label>
          <input
            className={style.input}
            type="number"
            name="price"
            onChange={handleChange}
            value={input.price}
            required
          />

          <label className={style.label}>Memoria Ram</label>
          <select
            className={style.input}
            name="ram"
            onChange={handleChange}
            required
          >
            <option defaultChecked value="">
              Seleccione Ram
            </option>
            <option value="2 GB DE RAM">2 Gb </option>
            <option value="4 GB DE RAM">4 Gb </option>
            <option value="6 GB DE RAM">6 Gb </option>
            <option value="8 GB DE RAM">8 Gb</option>
            <option value="12 GB DE RAM">12 Gb </option>
            <option value="16 GB DE RAM">16 Gb </option>
          </select>

          <label className={style.label}>Tamaño de Pantalla</label>
          <select
            className={style.input}
            name="screenSize"
            onChange={handleChange}
            required
          >
            <option defaultChecked value="">
              Seleccione Tamaño
            </option>
            <option value="3.5 PULGADAS"> 3.5 Pulgadas</option>
            <option value="4 PULGADAS"> 4 Pulgadas </option>
            <option value="4.7 PULGADAS"> 4.7 Pulgadas </option>
            <option value="5.5 PULGADAS"> 5.5 Pulgadas </option>
            <option value="6.1 PULGADAS"> 6.1 Pulgadas </option>
            <option value="6.5 PULGADAS"> 6.5 Pulgadas </option>
            <option value="6.2 PULGADAS"> 6.2 Pulgadas </option>
          </select>

          <label className={style.label}>Resolucion Camara</label>
          <select
            className={style.input}
            name="cameraInches"
            onChange={handleChange}
            required
          >
            <option defaultChecked value="">
              Seleccione Resolucion
            </option>
            <option value="2 MP"> 2 Mp</option>
            <option value="5 MP"> 5 Mp </option>
            <option value="8 MP"> 8 Mp </option>
            <option value="12 MP"> 12 Mp </option>
            <option value="16 MP"> 16 Mp </option>
            <option value="20 MP"> 20 Mp </option>
            <option value="32 MP"> 32 Mp </option>
            <option value="48 MP"> 48 Mp </option>
            <option value="64 MP"> 64 Mp </option>
            <option value="108 MP"> 108 Mp </option>
          </select>

          <label className={style.label}>Descripción</label>
          <textarea
            className={style.descripcion}
            type="text-area"
            name="description"
            onChange={handleChange}
            value={input.description}
            required
          />

          <label className={style.label}>Marca</label>
          <select
            className={style.input}
            name="brand"
            onChange={handleChange}
            required
          >
            <option defaultChecked value="">
              Seleccione Marca
            </option>
            <option value="APPLE">Apple</option>
            <option value="MOTOROLA">Motorola</option>
            <option value="SAMSUNG">Samsung</option>
            <option value="SONY">Sony</option>
            <option value="TECNO">Tecno</option>
            <option value="HUAWEI">Huawei</option>
            <option value="XIAOMI">Xiaomi</option>Realme
            <option value="REALME">Realme</option>
          </select>

          <label className={style.label}>Imagen</label>
          <input
            className={style.input}
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
         
          <label className={style.label}>Stock</label>
          <input
            className={style.input}
            type="number"
            name="count"
            onChange={handleChange}
            value={input.count}
            required
          />

          <button
            className={style.button}
            type="submit"
            disabled={!selectedImage}
          >
            Crear
          </button>
        </form>

        <button  onClick={handleEnviar}>
            Subir imagen
          </button>
        <div className={style.inputContainer}>
          <h2 className={style.titulo}>{input.title}</h2>
          {previewImage()}
          <p className={style.label}>Precio$ {input.price} </p>

          <p className={style.label}>Ram: {input.ram} </p>
          <p className={style.label}>Pantalla: {input.screenSize} </p>
          <p className={style.label}>Resolucion: {input.cameraInches} </p>

          <p className={style.label}>Marca: {input.brand} </p>
          <p className={style.label}>Stock: {input.count} </p>
        </div>
        <div className={style.inputContainer}>
          <p className={style.label}> {input.description} </p>
          <p className={style.label}> {input.imageURL} </p>
        </div>
      </div>
    </div>
  );
  //}
};

export default NewProduct;
