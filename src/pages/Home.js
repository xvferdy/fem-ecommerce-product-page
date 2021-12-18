import React from "react";

import product from "../assets/images/image-product-1.jpg";
import avatar from "../assets/images/image-avatar.png";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
// import cart from "../assets/images/icon-cart.svg";
import { ReactComponent as Cart } from "../assets/images/icon-cart.svg";

function Home() {
	return (
		<div className="home">
			<section className="home-container">
				<div className="product-showcase">
					<figure className="product-showcase__carousels">
						<img src={product} alt="product 1" />
					</figure>
					<div className="product-showcase__list">
						<img className="product-showcase__list-item" src={product} alt="" />
						<img className="product-showcase__list-item" src={product} alt="" />
						<img className="product-showcase__list-item" src={product} alt="" />
						<img className="product-showcase__list-item" src={product} alt="" />
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
					<div className="product-information__price-discount">
						<h2>
							$125<span>.00</span>
						</h2>
						<div className="discount">50%</div>
					</div>
					<h3 className="product-information__price-real">$250.00</h3>
					<div className="product-information__form">
						<div className="product-information__form-amount">
							<button>
								<img className="minus" src={minus} alt="Minus" />
							</button>
							<input type="text" value="1" />
							<button>
								<img src={plus} alt="Plus" />
							</button>
						</div>

						<button className="product-information__form-cta">
							Add to cart
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
