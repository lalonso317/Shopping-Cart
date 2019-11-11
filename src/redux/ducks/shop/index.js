import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect} from "react"


// Action Defs
const GET_ITEMS = "items/GET_ITEMS"
const SHOW_CART = "cart/SHOW_CART"
// const AMOUNT_CART = "cart/AMOUNT_CART"
const FILTER_ITEMS = "items/FILTER_ITEMS"

// Reducer
const initalState = {
    items:[],
    cart: [],
    // filter:{}
}

export default function reducer(state = initalState, action){
    switch (action.type){
        case GET_ITEMS:
            return { ...state, items: action.payload }
        case SHOW_CART:
            return { ...state, cart: action.payload} 
        default: 
            return state
    }
}

// Actions

function grabItems(){
    return dispatch =>{
        Axios.get("/products", ).then(resp =>{
            dispatch({
                type:GET_ITEMS,
                payload: resp.data
            })
        })
    }
}
function addToCart(item){
    return dispatch =>{
        Axios.post("/cart", {item}).then(resp =>{
            dispatch(showCart(resp.data))
        })
    }
}
function showCart(){
    return dispatch =>{
        Axios.get("/cart").then(resp=>{
            dispatch({
                type:SHOW_CART,
                payload: resp.data
            })
        })
    }
}
function removeCart(id){
    return dispatch =>{
        Axios.delete(`/cart/${id}`).then(resp =>{
            dispatch(showCart(resp.data))
        })
    }
}
// function filterItems(){
//     return dispatch =>{
//         Axios.get('/products').then(resp =>{
//             dispatch({
//                 type:FILTER_ITEMS,
//                 payload: resp.data
//             })
//         })
//     }
// }
// custom hook
export function useItems(){
    const dispatch = useDispatch()
    const items = useSelector(appState => appState.cartReducer.items)
    const cart = useSelector(appState => appState.cartReducer.cart)
    const add = item => dispatch(addToCart(item))
    const remove = item => dispatch(removeCart(item))

    useEffect(()=>{
        dispatch(grabItems())
        dispatch(showCart())
        // dispatch(filterItems())
        
    },[dispatch])
    return { items, add, cart, remove }
}


// {
//     type:ADD_CART,
//     payload: resp.data
// }
// const ADD_ITEMS = "items/ADD_ITEMS"

      // case ADD_ITEMS:
        //     return { ...state, items: action.payload }


    // const add = item => dispatch(grabItems(item))
    // , add 
    // const remove = id => dsipatch(removeCart(id))
    // , remove

// export function useCart(){
//     const items = useSelector(appState => appState.cartReducer.items)
// }