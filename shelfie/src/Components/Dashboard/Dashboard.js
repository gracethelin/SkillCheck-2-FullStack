import React, {Component} from 'react'
import Product from '../Product/Product'
import Form from '../Forms/Form'

class Dashboard extends Component{
    constructor(props){
    super(props)
}
    render(){
      if(this.props.inventory){

        const inventoryList = this.props.inventory.map(element => {
            console.log(element)
          
            return (
                <Product 
                key={element.id}
                product_name={element.product_name}
                id={element.product_id}
                product_price={element.product_price}
                imgUrl={element.product_image}
                saveProduct={this.props.saveProduct}
                deleteProduct={this.props.deleteProduct}
                />
            )
        })
        return (
            <div>{inventoryList}</div>
        )
        
      }
    }
}

export default Dashboard