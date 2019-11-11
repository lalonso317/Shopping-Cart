import React from 'react'
import { Provider } from 'react-redux'
import "semantic-ui-css/semantic.min.css" 

import '../styles/cart.css'
import store from '../redux/store'

import Items from "./Items"
import Filters from "./Filters"


function App(){
  return (
    <Provider store={store}>
      <div className="all">
      <Filters />
      <Items /> 
      </div>
    </Provider>
  )
}
export default App