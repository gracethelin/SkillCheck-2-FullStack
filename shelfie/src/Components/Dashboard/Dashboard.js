import React, {Component} from 'react'
import Product from '../Product/Product'
import Form from '../Forms/Form'

class Dashboard extends Component{
    constructor(props){
    super(props)
}
    render(){
        console.log(this.props)
      if(this.props.inventory){

        const inventoryList = this.props.inventory.map(element => {
            return (
                <Product 
                key={element.id}
                product_name={element.product_name}
                id={element.id}
                product_price={element.product_price}
                passing={this.props}
                saveProduct={this.props.saveProduct}
                newProductImg={this.props.newProductImg}
                newProductPrice={this.props.newProductPrice}
                />
            )
        })
        console.log(inventoryList)
     return (
        <div>{inventoryList}</div>
   )
        
      }
    }
}

export default Dashboard