import { useParams } from "react-router-dom";
import style from "./editProduct.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, putEditProduct } from "../../Redux/Actions";

export default function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.allProduct);
  const [imageURL, setImageURL] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const [input, setInput] = useState({
    _id: "",
    title: "",
    brand: "",
    price: null,
    description: "",
    image: product.image,
    ram: "",
    screenSize: "",
    cameraInches: "",
    count: null,
  });
console.log("imagenessss", input)
  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    setInput(product);
  }, [product]);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(putEditProduct({ ...input, image: imageURL }));
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
  };

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setSelectedImage(selectedFile);

      const formData = new FormData();
      formData.append("file", selectedFile);
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
          const data = await response.json();
          setImageURL(data.secure_url);
        } else {
          console.error("Error al cargar la imagen");
        }
      } catch (error) {
        console.error("Error al cargar la imagen", error);
      }
    }
  };

  return (
    <div className={style.back}>
      <a href="/admin" className={style.buttonBack}>
        Volver
      </a>
      <div className={style.container}>
        <form className={style.inputContainer} onSubmit={handleSubmit}>
          <h1 className={style.titulo}>Editar Producto</h1>
          <label className={style.label}>{product.title}</label>
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
            value={input.ram}
          >
            <option defaultChecked value="">
              Seleccione Ram
            </option>
            <option value="2 GB DE RAM"> 2 Gb </option>
            <option value="4 GB DE RAM"> 4 Gb </option>
            <option value="6 GB DE RAM"> 6 Gb </option>
            <option value="8 GB DE RAM"> 8 Gb </option>
            <option value="12 GB DE RAM"> 12 Gb </option>
            <option value="16 GB DE RAM">16 Gb </option>
          </select>

          <label className={style.label}>Tamaño de Pantalla</label>
          <select
            className={style.input}
            name="screenSize"
            onChange={handleChange}
            required
            value={input.screenSize}
          >
            <option defaultChecked value="">
              Seleccione Tamaño
            </option>
            <option value="3.5 PULGADAS"> 3.5 Pulgadas</option>
            <option value="4 PULGADAS"> 4 Pulgadas </option>
            <option value="4.7 PULGADAS"> 4.7 Pulgadas </option>
            <option value="5.5 PULGADAS">5.5 Pulgadas </option>
            <option value="6.1 PULGADAS"> 6.1 Pulgadas </option>
            <option value="6.5 PULGADAS">6.5 Pulgadas </option>
            <option value="6.2 PULGADAS">6.2 Pulgadas </option>
          </select>

          <label className={style.label}>Resolucion Camara</label>
          <select
            className={style.input}
            name="cameraInches"
            onChange={handleChange}
            required
            value={input.cameraInches}
          >
            <option>Seleccione Resolucion</option>
            <option value="2 MP"> 2 Mp</option>
            <option value="5 MP"> 5 Mp </option>
            <option value="8 MP"> 8 Mp </option>
            <option value="12 MP">12 Mp </option>
            <option value="16 MP"> 16 Mp </option>
            <option value="20 MP">20 Mp </option>
            <option value="32 MP">32 Mp </option>
            <option value="48 MP">48 Mp </option>
            <option value="64 MP">64 Mp </option>
            <option value="108 MP">108 Mp </option>
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
            value={input.brand}
          >
            <option defaultChecked value="">
              Seleccione Marca
            </option>
            
            <option value="MOTOROLA">Motorola</option>
            <option value="SAMSUNG">Samsung</option>
            <option value="TECNO">Tecno</option>
            <option value="HUAWEI">Huawei</option>
            <option value="XIAOMI">Xiaomi</option>
          </select>

          <label className={style.label}>Imagen</label>
          <img
            className={style.img}
            src={input.image}
            name="image"
            onChange={handleChange}
            accept="image/*"
            
          />
          <input
            className={style.input}
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            
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
            //   disabled={!selectedImage}
          >
            Actualizar Producto
          </button>
        </form>
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
        </div>
      </div>
    </div>
  );
}
