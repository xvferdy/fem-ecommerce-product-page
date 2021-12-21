import React, { useContext } from "react";

import useToggle from "../hooks/useToggle";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
// import product from "../assets/images/image-product-1.jpg";
import trash from "../assets/images/icon-delete.svg";
import avatar from "../assets/images/image-avatar.png";
import hamburger from "../assets/images/icon-menu.svg";

import { CartsContext } from "../contexts/Carts.context";

import { DispatchCartsContext } from "../contexts/Carts.context";

function Navbar({ toggleSidebar }) {
	const carts = useContext(CartsContext);
	const dispatch = useContext(DispatchCartsContext);

	console.log(carts);
	const [cartShowing, setCartShowing] = useToggle();
	return (
		<header className="header">
			<div className="header-container">
				<nav className="nav">
					<button className="nav__hamburger" onClick={toggleSidebar}>
						<img src={hamburger} alt="Menu" />
					</button>

					<a href="#">
						<img src={logo} alt="SNEAKERS" />
					</a>
					<ul className="nav__list">
						<li className="nav__list-item ">
							<a className="link" href="#">
								Collections
							</a>
						</li>
						<li className="nav__list-item ">
							<a className="link" href="#">
								Men
							</a>
						</li>
						<li className="nav__list-item ">
							<a className="link" href="#">
								Women
							</a>
						</li>
						<li className="nav__list-item ">
							<a className="link" href="#">
								About
							</a>
						</li>
						<li className="nav__list-item ">
							<a className="link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<div className="user">
					<img
						className="user__cart"
						src={cart}
						alt="Cart"
						onClick={setCartShowing}
					/>
					<img className="user__avatar" src={avatar} alt="Avatar" />
				</div>
				{cartShowing && (
					<>
						<div
							className="cart-popup__backdrop"
							onClick={setCartShowing}
						></div>
						<div className="cart-popup">
							<h3 className="cart-popup__title">Cart</h3>
							{carts.length !== 0 ? (
								<>
									{/* since there's only 1 unique item, we dont have to map() through, but I forget  */}
									{carts.map((product) => (
										<div className="cart-popup__detail">
											<img
												className="product"
												src={product.thumb}
												alt="Product"
											/>
											<div className="cart-popup__detail-center">
												<p className="product">{product.name}</p>
												<p className="price">
													${product.priceFinal}.00 x {product.quantity}{" "}
													<span>
														&nbsp; ${product.priceFinal * product.quantity}.00
													</span>
												</p>
											</div>
											<button
												className="delete"
												onClick={() => {
													dispatch({ type: "REMOVE", id: product.id });
												}}
											>
												<img src={trash} alt="" />
											</button>
										</div>
									))}

									<div className="cart-popup__checkout">
										<button>Checkout</button>
									</div>
								</>
							) : (
								<div className="cart-popup__empty">
									<p>Your cart is empty</p>
								</div>
							)}
						</div>
					</>
				)}
			</div>
		</header>
	);
}

export default Navbar;
