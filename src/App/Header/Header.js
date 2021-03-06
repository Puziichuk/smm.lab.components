import React from 'react'


import Cart from './Cart/Cart'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

const Header =({productsInCart})=>{
	console.log(productsInCart)
	return (
		<header className="header">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
						<Logo/>
						</div>
						<div className="col-lg-6">
							<Menu/>
						</div>
						<div className="col-lg-3">
							<Cart
							productsInCart={productsInCart}
							/>
						</div>
					</div>
				</div>
			</header>

	)

}

export default Header