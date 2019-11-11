import React, { useState } from 'react'
import { useItems } from '../redux/ducks/shop'
import CurrencyFormat from 'react-currency-format';
import "semantic-ui-css/semantic.min.css"
import { Button, Menu, Sidebar } from "semantic-ui-react"
import Cart from "./Cart"

export default function Items() {
const {items, add} = useItems()
const [visible, setVisible] = useState(false)

  function handleClick(item){
    add(item)
  }
// const installments = items.map(item =>{
//     return (item.installments.toFixed(2))
// })

  return (
    <div className="main"  >
      <div className="wholebutton">
      <Button
        icon="shop"
        onClick={e => (!visible ? setVisible(true) : setVisible(false))}
        className="cart"
        id="cartbutton"
        secondary
      />
      </div>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          direction="right"
          id="sidebar"
          className="slidingmenu"
        >
          <Cart />
        </Sidebar>
        <Sidebar.Pusher>
        <span className="orderby">
          <span>{items.length} Product(s) found.</span>
              <label htmlFor="select">Order by:</label>
              <select htmlFor="select">
                <option>Select</option>
                <option>Lowest to Highest</option>
                <option>Highest to Lowest</option>
              </select>
            </span>
            <div className="shop" >
              {items.map((list,i) =>(
                <div key={"item" + i}  className="imagegrid">
                  <div>
                    <div className="shipping">
                      <p className={list.isFreeShipping === true ?  'free' : 'notfree'}>Free Shipping </p>
                    </div>
                    <img alt="" className="shopimg" src={`/assets/${list.sku}_1.jpg`} />
                  </div>
                  <span>{list.title}</span>
                  <CurrencyFormat value={list.price} displayType={'text'}prefix={'$'} fixedDecimalScale={true} decimalScale={2} />
                  <p className="dash">—</p>
                  {/* <span>{installments}</span> */}
                  <button className="addcart"  onClick={(e) => handleClick(list)}>Add to cart</button>
                </div>
              ))}
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    </div>
  )
}