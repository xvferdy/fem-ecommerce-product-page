import React from "react";

import useToggle from "../hooks/useToggle";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import product from "../assets/images/image-product-1.jpg";
import trash from "../assets/images/icon-delete.svg";
import avatar from "../assets/images/image-avatar.png";
import hamburger from "../assets/images/icon-menu.svg";

function Navbar({ toggleSidebar }) {
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
							{true ? (
								<>
									<div className="cart-popup__detail">
										<img className="product" src={product} alt="Product" />
										<div className="cart-popup__detail-center">
											<p className="product">Fall Limited Edition Sneakers</p>
											<p className="price">
												$125.00 x 1 <span>$125.00</span>
											</p>
										</div>

										<img className="delete" src={trash} alt="" />
									</div>
									<div className="cart-popup__checkout">
										<button>Checkout</button>
									</div>
								</>
							) : (
								<p>sdsf</p>
							)}
						</div>
					</>
				)}
			</div>
		</header>
	);
}

export default Navbar;
