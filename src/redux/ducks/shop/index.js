import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect} from "react"


// Action Defs
const GET_ITEMS = "items/GET_ITEMS"
const FILTER_ITEMS = "items/FILTER_ITEMS"
const ADD_CART = "cart/ADD_CART"
const REMOVE_CART = "cart/REMOVE_CART"
const AMOUNT_CART = "cart/AMOUNT_CART"

// Reducer
const initalState = {
    items:[],
    cart: [],
    filter:{}
}

export default function reducer(state = initalState, action){
    switch (action.type){
        case GET_ITEMS:
            return { ...state, items: action.payload }
        case ADD_CART:
            return { ...state, cart: action.payload}
        case REMOVE_CART:
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
function addToCart(){
    return dispatch =>{
        Axios.post("/cart").then(resp =>{
            dispatch({
                type:ADD_CART,
                payload: resp.data
            })
        })
    }
}


// custom hook
export function useItems(){
    const dispatch = useDispatch()
    const items = useSelector(appState => appState.cartReducer.items)
    const add = item => dispatch(addToCart(item))
    const fetch = () => dispatch(grabItems())

    useEffect(()=>{
        fetch()
    },[])

    return { items, add }
}

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