import React,{Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Forms/Form'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'
import axios from 'axios'
import './App.css';


class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      inventory: []
    }

    this.newProductName = this.newProductName.bind(this)
    this.newProductPrice = this.newProductPrice.bind(this)
    this.newProductImg = this.newProductImg.bind(this)
  }

  
  newProductName(){
      axios.get('/api/inventory').then(res => {
          this.setState({
              inventory: res.data
          })
      }).catch((error) => console.log(error))
  }

  newProductPrice(){
      axios.get('/api/inventory').then(res => {
          this.setState({
              price: res.data
          })
      }).catch((error) => console.log(error))
  }

  newProductImg(){
      axios.get('/api/inventory').then(res => {
          this.setState({
              imgurl: res.data
          })
      }).catch((error) => console.log(error))

  }

  saveProduct = (product_name, product_price) => [
      axios.post('/api/inventory', {product_name}, {product_price}).then(res => {
          this.setState({
          })
      }).catch((error) => console.log(error))
  ]
     
  
  render(){
    return (
      <div className="App"> 
      <Header />
        <Dashboard  inventory={this.state.inventory}
        />
        <Form newProductName={this.newProductName}
        newProductPrice={this.newProductPrice}
        newProductImg={this.newProductImg}
        saveProduct={this.saveProduct}
        
        />
        <Product />

      </div>
    )
  }
}

export default App;
