import React from "react";

import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

function Navbar() {
	return (
		<header className="header">
			<nav className="header__nav">
				<div>
					<img src={logo} alt="SNEAKERS" />
					<ul>
						<li>
							<a href="#"> Collection</a>
						</li>
						<li>
							<a href="#"> Men</a>
						</li>
						<li>
							<a href="#"> Women</a>
						</li>
						<li>
							<a href="#"> About</a>
						</li>
						<li>
							<a href="#"> Contact</a>
						</li>
					</ul>
				</div>
			</nav>
			<div>
				<img src={cart} alt="Cart" />
				<img src={avatar} alt="Avatar" />
			</div>
		</header>
	);
}

export default Navbar;
