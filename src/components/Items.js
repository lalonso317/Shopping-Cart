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
      <Sidebar.Pushable className="slidebar">
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          direction="right"
          className="slidingmenu slidebar"
        >
          <Cart />
        </Sidebar>
        <Sidebar.Pusher className="slidebar">
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
                  <div className="wholeimg">
                    <div className="shipping">
                      <p className={list.isFreeShipping === true ?  'free' : 'notfree'}>Free Shipping </p>
                    </div>
                    <div>
                      <img alt="" className="shopimg" src={`/assets/${list.sku}_1.jpg`} />
                    </div>
                    <div>
                      <span>{list.title}</span>
                    </div>
                      <p className="dash">—</p>
                      <CurrencyFormat value={list.price} displayType={'text'}prefix={'$'} fixedDecimalScale={true} decimalScale={2} />
                      <span> Or {( list.price/list.installments ).toFixed(2)} X {list.installments}</span>
                  <div className="addcartcenter">
                    <button className="addcart"  onClick={(e) => handleClick(list)}>Add to cart</button>
                  </div>
                </div>
                </div>
              ))}
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    </div>
  )
}