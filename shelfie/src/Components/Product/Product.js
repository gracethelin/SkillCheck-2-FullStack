import React, {Component} from 'react'
import Dashboard from '../Dashboard/Dashboard'

function Product (props){
    console.log(props)
    return(
        
        <div className='products'> 
            {props.product_name}
            {props.product_price}
            <img src={props.imgUrl} />
            <button onClick={() => props.deleteProduct(props.id)}>Delete</button>
        </div>
   ) 

}
export default Product