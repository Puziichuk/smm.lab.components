import React from 'react'
import {keys} from 'lodash'
import productsData, {getProductsMap} from '../../App/Main/Products/productsData'
import CartProductListItem from './CartProductListItem'
import ProductQuantity from '../Components/Quantity/ProductQuantity'

const CartProductList =({
	productsInCart,
    productsMap = getProductsMap(productsData),
    CartItem = CartProductListItem,
    removeProductFromCart,
    ProductQuantity,
    changeProductQuantity,
})=>{
      return(
        <div >
        {   
            keys(productsInCart).map((productId)=>(
                <CartItem
                    key={productId}
                    product={productsMap[productId]}
                    productCount={productsInCart[productId]}
                    removeProductFromCart={removeProductFromCart}
                    ProductQuantity={ProductQuantity}
                    changeProductQuantity={changeProductQuantity}
                />
            ))
        }
    </div>

    )
}

export default CartProductList