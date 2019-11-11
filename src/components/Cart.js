import React from 'react'
import { useItems } from '../redux/ducks/shop'
import CurrencyFormat from 'react-currency-format';


export default function Cart(props) {
const {cart ,remove} = useItems()
// const [cartItem, setCartItem] = useState('')

function handleClick(item){
  remove(item)
} 

var prices = cart.map(item =>(
    item.item.price
  ))

function sum(num1, num2){
  return num1 + num2
}
var total = prices.reduce(sum,0)

var quantity = cart.map(item =>{
  return item.item.length
}) 

  return (
    <div>
      <div id="slidecart" >
        <div className="cartgrid">
        <div>
          <p className="itemsincart">{cart.length}</p>
        </div>
        {cart.map((item,i) =>(
          <div key={"cart" + i} className="itemincart">
            <span> <img alt="" src={`/assets/${item.item.sku}_2.jpg`} /></span>
            <p>{item.item.title}</p>
            <p>{quantity}</p>
            <CurrencyFormat value={item.item.price} displayType={'text'}prefix={'$'} fixedDecimalScale={true} decimalScale={2} />
            <button className="xbutton" onClick={(e) =>(handleClick(item.id))}>X</button>
          </div>
        ))}
        </div>
        <div className="totals">
          <p className="subtotal">SubTotal:</p>
          <p className="subtotal">$ {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
} 