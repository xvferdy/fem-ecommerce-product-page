import React from "react";

import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import hamburger from "../assets/images/icon-menu.svg";

function Navbar() {
	return (
		<header className="header">
			<div className="header-container">
				<nav className="nav">
					<a href="#">
						<img src={logo} alt="SNEAKERS" />
					</a>
					<img className="nav__hamburger" src={hamburger} alt="Menu" />
					<ul className="nav__list">
						<li className="nav__list-item">
							<a href="#"> Collections</a>
						</li>
						<li className="nav__list-item">
							<a href="#"> Men</a>
						</li>
						<li className="nav__list-item">
							<a href="#"> Women</a>
						</li>
						<li className="nav__list-item">
							<a href="#"> About</a>
						</li>
						<li className="nav__list-item">
							<a href="#"> Contact</a>
						</li>
					</ul>
				</nav>
				<div className="user">
					<img src={cart} alt="Cart" />
					<img className="user__avatar" src={avatar} alt="Avatar" />
				</div>
			</div>
		</header>
	);
}

export default Navbar;
