import React, {Component} from 'react'
import Dashboard from '../Dashboard/Dashboard'

function Product (props){
    console.log(props.inventory1)
    return(
        <div className='products'> 
            {props.product_name}
            {props.product_price}
        </div>
   ) 

}
export default Product