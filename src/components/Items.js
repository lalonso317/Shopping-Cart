import React from 'react'
import { useItems } from '../redux/ducks/shop'


export default function Items() {


const {items} = useItems()

  return (
    <div>
      <div  className="main">
      {items.map(list =>(
        <div>
          <span>{list.title}</span>
          <span>{list.price}</span>
          
          <span> <img src={`/assets/${list.sku}_1.jpg`} /></span>
          <button>Add to cart</button>
        </div>
      ))}
      </div>
    </div>
  )
}