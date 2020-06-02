 import React,{Component}from 'react'
 import PropTypes from 'prop-types';
 import {connect} from 'react-redux'
 import ProductQuantity from '../../../Components/Quantity/ProductQuantity'
 
 class ProductListItem extends Component {


    state={
        productsCount:1
    }

    onIncrementClick=()=>{
        this.setState((prevState) =>({
            productsCount:prevState.productsCount+1
        }))
    
    }
    
    onDecrementClick=()=>{
        this.setState((prevState) =>({
            productsCount:prevState.productsCount-1
        }))
    
    }
    
    renderLike=()=>{
        const{
            id,
            isLiked,
            addLike,
            removeLike
        } =this.props
        if(isLiked){
            removeLike(id)
        } else {
            addLike(id)
        }
        }
    
  render(){
    const{
        name,
        id,
        description,
        price,
        addProductToCart
     }= this.props
        return(
       <div className="product-list-item">
      <div className="product-title">{name}</div>
      <div className="product-description"
      dangerouslySetInnerHTML={{
        __html:description
       }}></div>
      <div className="product-quantity">
      <ProductQuantity
   productCount={this.state.productCount}
   onDecrementClick={this.onDecrementClick}
   onIncrementClick={this.onIncrementClick}
   minCount={1}
   />

       </div>
      <div className="product-price">${price}</div>
      <button className="btn btn-add-to-cart" 
   onClick={()=>addProductToCart(id,this.state.productsCount,price)}>Add to cart</button>

   
           
        </div>
    )
    }
}
ProductListItem.propTypes={
    name: PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    image:PropTypes.string,
    price:PropTypes.number.isRequired,
}
ProductListItem.defaultProps={
    description:"No description..."
}


const mapStateToProps = (state,props) => ({
    isLiked:state.likeProductsState[props.id]
})


const mapDispatchToProps =(dispatch)=>({
    addLike:(id)=>dispatch({
        type: "LIKE",
        id:id
    }),
    removeLike :(id)=>dispatch({
        type: "DISLIKE",
        id:id
    })
})

export default connect(
mapStateToProps,
mapDispatchToProps
) (ProductListItem)
