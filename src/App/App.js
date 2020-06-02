import React,{Component} from 'react'
import {omit} from 'lodash'

import '../common/reset.css'
import '../common/smm.lab.css'


import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
  state ={
    productsInCart:{
      '1':5,
      '2':3,
    }
  
  }
  removeProductFromCart= (productId) => {
    this.setState((prevState) =>( {
		productsInCart:omit(prevState.productsInCart,productId)
		
}))
}
  

  addProductToCart=(productId,count)=>{
    this.setState((prevState) =>({
      productsInCart:{
        ...prevState.productsInCart,
        [productId]:(prevState.productsInCart[productId] || 0 )+ count
  

		}
    }))

  }
  changeProductQuantity = (productId,quantity) => {
    this.setState((prevState)=>({
      productsInCart: {
        ...prevState.productsInCart,
        [productId]: quantity
      }
    }))
  }
 
  
   render(){

  return (
    <div>
      <Header
      productsInCart={this.state.productsInCart}	
      />
      <button onClick={()=>this.removeProductFromCart(1)}>Delete</button>
      <Main
      addProductToCart={this.addProductToCart}
			productsInCart={this.state.productsInCart}
			removeProductFromCart={this.removeProductFromCart}
			changeProductQuantity={this.changeProductQuantity}
      />
      <Footer/>
    </div>
  )
}
}


export default App