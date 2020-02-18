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


  }

  
  componentDidMount(){
      axios.get('/api/inventory').then(res => {
          this.setState({
              inventory: res.data
          })
      }).catch((error) => console.log(error))
  }


  saveProduct = (productName, productPrice, imgUrl) => {
    console.log(productName, productPrice, imgUrl)
      axios.post('/api/inventory', {productName, productPrice, imgUrl}).then(res => {
        console.log('res', res)
          this.setState({
            inventory: res.data
          })
          return res.data
      }).catch((error) => console.log(error))
    }
     
    deleteProduct = (id) => {
      axios.delete(`/api/inventory/${id}`).then(res => {
        this.setState({
          inventory: res.data
        })
      })
    }
  
  render(){
    return (
      <div className="App"> 
        <Header />
        <Dashboard  
          inventory={this.state.inventory}
          deleteProduct={this.deleteProduct}
        />
        <Form 
          newProductName={this.newProductName}
          newProductPrice={this.newProductPrice}
          newProductImg={this.newProductImg}
          saveProduct={this.saveProduct}
        />
      </div>
    )
  }
}

export default App;
