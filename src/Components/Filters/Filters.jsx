import React from 'react'

const Filters = () => {
  return (
    <div>
         <select  name="" id="">
        <option defaultChecked value="asc">-</option>
        <option value="asc">Ascendente</option>
        <option value="des">Descendente</option>
        <option value="rating">Mayor Rating</option>
        <option value="menorrating">Menor Rating</option>
        </select>
    </div>
  )
}

export default Filters