import React from 'react'
import Cards_Phone from '../../Components/Cards_Phone/Cards_Phone'
export const Product = [
  {
    id: 1,
    name: "Sansung Galaxy s23",
    price: 900000,
    description: "Procesado Snapdragon 8 Gen",
    image: "https://smselectronic.com/wp-content/uploads/2023/05/8806094711417_a.jpg"
  },
  {
    id: 2,
    name: "4.299.900",
    price: 4299900,
    description: "Procesador: Apple A14 Bionic, ",
    image: "https://falabella.scene7.com/is/image/FalabellaPE/121114967_1?wid=800&hei=800&qlt=70"
  },
  {
    id: 3,
    name: "Celular HUAWEI P60 Pro 256GB",
    price: 1500000,
    description: "La mejor cámara",
    image: "https://comprasmartphone.com/_next/image?url=https%3A%2F%2Fstorage.comprasmartphone.com%2Fsmartphones%2Fmotorola-razr-40.png&w=640&q=75"
  },
  {
    id: 4,
    name: "Celular Xiaomi Redmi Note 12 Pro",
    description: " Procesador MediaTek ",
    price: 5000000,
    image: "https://carulla.vtexassets.com/arquivos/ids/8192351/celular-xiaomi-redmi-note-11-pro-4g-128gb-108mp-8ram-blanco-polar-forro.jpg?v=637921353418700000"
  },
  {
    id: 5,
    name: "Celular Xiaomi Redmi N 8",
    description: "Celular Xiaomi Redmi N 8",
    price: 3000000,
    image: "https://images.colombo.com.br/produtos/4382824/4382824_Smartphone_Xiaomi_Redmi_note_8_PRO_128GB_6GB_RAM_Verde_Versao_Global_12058534_z.jpg"
  },
  {
    id: 6,
    name: "Celular Xiaomi Redmi N 5",
    description: "Celular Xiaomi Redmi N 8",
    price: 3000000,
    image: "https://images.colombo.com.br/produtos/4382824/4382824_Smartphone_Xiaomi_Redmi_note_8_PRO_128GB_6GB_RAM_Verde_Versao_Global_12058534_z.jpg"
  },
  {
    id: 7,
    name: "Sansung Galaxy s23",
    description: "El celular mas potente del Mundo",
    price: 1000000,
    image: "https://smselectronic.com/wp-content/uploads/2023/05/8806094711417_a.jpg"
  },
  {
    id: 8,
    name: "Celular  Redmi Note 12 Pro",
    description: " Procesador MediaTek Dimensity 1080",
    price: 4500000,
    image: "https://carulla.vtexassets.com/arquivos/ids/8192351/celular-xiaomi-redmi-note-11-pro-4g-128gb-108mp-8ram-blanco-polar-forro.jpg?v=637921353418700000"
  },
  {
    id: 9,
    name: "celular",
    price: 4299900,
    description: "Procesador: Apple A14 Bionic, ",
    image: "https://shopbeta.com.gh/wp-content/uploads/2021/12/Apple-iPhone-12-mini.jpg"
  },
  {
    id: 10,
    name: "celular",
    price: 250000,
    description: "Procesador: Apple A14 Bionic, ",
    image: "https://smselectronic.com/wp-content/uploads/2023/05/8806094711417_a.jpg"
  },
]

const Home = () => {
  return (
    <div>
      <Cards_Phone Product = {Product}/>
    </div>
  )
}

export default Home