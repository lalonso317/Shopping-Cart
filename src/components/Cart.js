import React from 'react'
import { useSelector } from 'react-redux'
import { useItems } from '../redux/ducks/shop'

export default function Cart(props) {
const {add} = useItems()
  function handleClick(e){
    e.preventDefault()

  }
  return (
    <div>
      <button onClick={(e) => handleClick(e)}></button>
    </div>
    // <h1>Greeting: </h1>
  )
}