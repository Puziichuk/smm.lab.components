import React from 'react'
 


const ProductQuantity =({
    productCount,
    onDecrementClick,
    onIncrementClick,
    minCount
})=>{
    return(
        <div className="product-quantity">
        <button 
        disabled={productCount <= minCount}
        onClick={onDecrementClick}>-</button>
        <input type="text" value={productCount} readOnly/>
        <button onClick={onIncrementClick}
        disabled={productCount >=10}
        >+</button>
    </div>

    )
}

export default ProductQuantity