import React from "react";

import product from "../assets/images/image-product-1.jpg";
import avatar from "../assets/images/image-avatar.png";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import cart from "../assets/images/icon-cart.svg";

function Home() {
	return (
		<div className="home">
			<section>
				<div className="product-showcase">
					<figure className="product-showcase__carousels">
						<img src={product} alt="product 1" />
					</figure>
					<div>
						<img src={avatar} alt="" />
						<img src={avatar} alt="" />
						<img src={avatar} alt="" />
						<img src={avatar} alt="" />
					</div>
				</div>
				<div className="product-information">
					<p className="product-information__label">Sneaker Company</p>
					<h1 className="product-information__name">
						Fall Limited Edition Sneakers
					</h1>
					<p className="product-information__detail">
						These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they’ll withstand everything
						the weather can offer.
					</p>
					<h2 className="product-information__price-discount">
						$125.00 <span>50%</span>
					</h2>
					<h3 className="product-information__price-real">$250.00</h3>
					<form className="product-information__form">
						<div className="product-information__form-amount">
							<img src={minus} alt="Minus" />
							<input type="text" />
							<img src={plus} alt="Plus" />
						</div>

						<button className="product-information__form-cta">
							<img src={cart} alt="Cart" /> Add to cart
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}

export default Home;
