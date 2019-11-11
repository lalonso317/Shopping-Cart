import React from 'react'
import { useItems} from '../redux/ducks/shop'

export default function Filters(){
const { items, add} =  useItems()

var sizes = items.map((item)=>{
    return item.availabelSizes    
})

// sizes.filter((arr,spec) =>{
    
// })

    return(
        <div className="filter">
            <div className="name">
                 <p >Sizes:</p>
            </div>
            <div className="aside">
                <div className="filtercircles">
                    <p  className="sizes">XS</p>
                    <p className="sizes">S</p>
                    <p className="sizes">M</p>
                    <p className="sizes">ML</p>
                    <p className="sizes">L</p>
                    <p className="sizes">XL</p>
                    <p className="sizes">XXL</p>
                    
                </div>
            </div>
        </div>
    )
}