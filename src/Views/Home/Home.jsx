import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import Cards_Phone from '../../Components/Cards_Phone/Cards_Phone'
import {getProduct} from "../../Redux/Actions"

const Home = () => {
  const Product = useSelector ((state)=> state.allProduct)
  console.log(Product)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProduct())
  },[])

  return (
    <div>
      <Cards_Phone Product = {Product}/>
    </div>
  )
}

export default Home