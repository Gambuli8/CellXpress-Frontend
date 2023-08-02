<<<<<<< HEAD
import Cards_Phone from '../../Components/Cards_Phone/Cards_Phone'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';
export const Product = [
  {
    id: 1,
    name: "Sansung Galaxy s23",
    description: "El celular mas potente del Mundo",
    image: "https://smselectronic.com/wp-content/uploads/2023/05/8806094711417_a.jpg"
  },
  {
    id: 2,
    name: "Sansung Galaxy s23",
    description: "El celular mas potente del Mundo",
    image: "https://smselectronic.com/wp-content/uploads/2023/05/8806094711417_a.jpg"
  },
  {
    id: 3,
    name: "Sansung Galaxy s23",
    description: "El celular mas potente del Mundo",
    image: "https://smselectronic.com/wp-content/uploads/2023/05/8806094711417_a.jpg"
  },
  {
    id: 4,
    name: "Sansung Galaxy s23",
    description: "El celular mas potente del Mundo",
    image: "https://smselectronic.com/wp-content/uploads/2023/05/8806094711417_a.jpg"
  },
  {
    id: 5,
    name: "Sansung Galaxy s23",
    description: "El celular mas potente del Mundo",
    image: "https://smselectronic.com/wp-content/uploads/2023/05/8806094711417_a.jpg"
  },
  {
    id: 6,
    name: "Sansung Galaxy s23",
    description: "El celular mas potente del Mundo",
    image: "https://smselectronic.com/wp-content/uploads/2023/05/8806094711417_a.jpg"
  },
  {
    id: 7,
    name: "Sansung Galaxy s23",
    description: "El celular mas potente del Mundo",
    image: "https://smselectronic.com/wp-content/uploads/2023/05/8806094711417_a.jpg"
  }
]
=======
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import Cards_Phone from '../../Components/Cards_Phone/Cards_Phone'
import {getProduct} from "../../Redux/Actions"
>>>>>>> bc8ff0eb37d458ecf799cd9c490cabe56b1f8fc5

const Home = () => {
  const Product = useSelector ((state)=> state.allProduct)
  console.log(Product)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProduct())
  },[])

  return (
    <div>
      <Navbar/>
      <Cards_Phone Product = {Product}/>
      <Footer/>
    </div>
  )
}

export default Home