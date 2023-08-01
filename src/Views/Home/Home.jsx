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

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Cards_Phone Product = {Product}/>
      <Footer/>
    </div>
  )
}

export default Home