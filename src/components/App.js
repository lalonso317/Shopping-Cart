import React from 'react'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import '../styles/cart.css'
import store from '../redux/store'

import Items from "./Items"
import Cart from "./Cart"
import Filters from "./Filters"


function App(){
  return (
    <Provider store={store}>
      <div>
      <Filters />
        <Items />
        <Cart />
      </div>
    </Provider>
  )
}
export default App