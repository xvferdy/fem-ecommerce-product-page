import React, { useState, useEffect } from "react";

import useToggle from "../hooks/useToggle";

import productDemo from "../assets/images/image-product-1.jpg";
import avatar from "../assets/images/image-avatar.png";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";
import sneakers from "../utils/sneakers";

// import cart from "../assets/images/icon-cart.svg";
import { ReactComponent as Cart } from "../assets/images/icon-cart.svg"; //FIXME: cart icon
import LightBox from "../components/LightBox";

function Home() {
	const [lightBoxShowing, setLightBoxShowing] = useToggle();

	const [productId, setProductId] = useState(1);
	const [productDetail, setproductDetail] = useState(productDemo); // projectDemo to []

	const [slug, { img }] = productDetail;

	useEffect(() => {
		let preview = Object.entries(sneakers).find(
			([slug, { id, name, thumb, img }]) => productId === id
		);
		setproductDetail(preview);
	}, [productId]);

	return (
		<div className="home">
			{lightBoxShowing && (
				<LightBox
					// lightBoxShowing={lightBoxShowing}
					setLightBoxShowing={setLightBoxShowing}
					initialImg={img}
					initialProductId={productId}
				/>
			)}

			<section className="home-container">
				<div className="product-showcase">
					<figure
						className="product-showcase__carousels"
						onClick={setLightBoxShowing}
					>
						{/* first it begin wtih productDemo (img) and after that will modified to array */}
						<img className="show" src={img} alt="product" />
					</figure>
					<div className="product-showcase__list">
						{Object.entries(sneakers).map(
							([slug, { id, name, thumb, img }]) => {
								const style =
									productId === id
										? "thumbnail thumbnail--active"
										: "thumbnail";
								return (
									<div
										className={style}
										title={name}
										onClick={() => setProductId(id)}
									>
										<img
											className="product-showcase__list-item"
											src={thumb}
											alt={name}
										/>
									</div>
								);
							}
						)}
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
						<h3 className="mobile-real">$250.00</h3>
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
