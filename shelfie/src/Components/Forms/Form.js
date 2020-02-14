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

    // handleChange = () => {

    // }

    // newProductName(){
    //     axios.get('/api/products').then(res => {
    //         this.setState({
    //             name: res.data
    //         })
    //     })
    // }

    // newProductPice(){
    //     axios.get('/api/products').then(res => {
    //         this.setState({
    //             price: res.data
    //         })
    //     })
    // }

    // newProductImg(){
    //     axios.get('/api/products').then(res => {
    //         this.setState({
    //             imgUrl: res.data
    //         })
    //     })

    // }

    // saveProduct = (product) => [
    //     axios.post('/api/products', {product}).then(res => {
    //         this.setState({
    //         })
    //     })
    // ]

    handleCancel = (event) => {
        event.preventDefault();
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
            // value={this.state.name}
            placeholder="Enter Product Name"
            onChange={() => this.props.newProductName(this.state.productName)}/>
           </ul>
            <ul> 
                <div>Product Price:</div>
            <input 
            // value={this.state.price}
            placeholder="Enter Price"
            onChange={e => this.props.newProductPrice(e.target.value)}
            /></ul>
           <ul> 
               <div>Image URL:</div>
               <input 
            // value={this.state.imgurl}
            placeholder="Enter Image URL"
            onChange={e => this.props.newProductImg(this.state.imgurl)}
            /></ul>
            <button onClick={() => this.props.saveProduct(this.state.productName)} 
            >Add To Inventory
            </button>
            <button onClick= {() =>this.handleCancel} >Cancel</button>
            
        </div>
        
    )}
}

export default Form