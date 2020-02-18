import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component{
    constructor(props){
    super(props)

    this.state={
        productName:'',
        productPrice: '',
        imgUrl:'',
    }
  
}


    productName = (event) =>{
       this.setState({
           productName: event.target.value
       })
    }

    productPrice = (event) =>{
        this.setState({
            productPrice: event.target.value
        })
    }

    productImg = (event) =>{
        this.setState({
            imgUrl: event.target.value
        })

    }

    // saveProduct = (product) => [
    //     axios.post('/api/products', {product}).then(res => {
    //         this.setState({
    //         })
    //     })
    // ]

    handleCancel = () => {
        this.setState({
            productName:'',
            productPrice: '',
            imgUrl:'',
        })
    }
    

    render(){
        return (
        <div className="Box">
            <ul>
                <div>Product Name:</div>
            <input 
            value={this.state.productName}
            placeholder="Enter Product Name"
            onChange={(event) => this.productName(event)}/>
           </ul>
            <ul> 
                <div>Product Price:</div>
            <input 
            value={this.state.productPrice}
            placeholder="Enter Price"
            onChange={(event) => this.productPrice(event)}
            /></ul>
           <ul> 
               <div>Image URL:</div>
               <input 
            value={this.state.imgUrl}
            placeholder="Enter Image URL"
            onChange={(event) => this.productImg(event)}
            /></ul>
            <button 
                onClick={() => this.props.saveProduct(this.state.productName, this.state.productPrice, this.state.imgUrl)}
            >   
                Add To Inventory
            </button>

            <button 
                onClick= {() =>this.handleCancel()} 
            >
                Cancel
            </button>
            
        </div>
        
    )}
}

export default Form