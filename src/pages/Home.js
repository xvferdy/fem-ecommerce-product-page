import React, { useState, useEffect, useContext } from "react";

import useToggle from "../hooks/useToggle";

import productDemo from "../assets/images/image-product-1.jpg";
import avatar from "../assets/images/image-avatar.png";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";
import { sneakers } from "../utils/sneakers";

import useNumInput from "../hooks/useNumInput.js";
// import cart from "../assets/images/icon-cart.svg";
import { ReactComponent as Cart } from "../assets/images/icon-cart.svg"; //FIXME: cart icon
import LightBox from "../components/LightBox";

import { DispatchCartsContext } from "../contexts/Carts.context";

function Home() {
	const [lightBoxShowing, setLightBoxShowing] = useToggle();

	const [productId, setProductId] = useState(1);
	const [productDetail, setproductDetail] = useState(productDemo); // projectDemo to []
	const { input, minus, change, plus, reset } = useNumInput(0);

	const dispatch = useContext(DispatchCartsContext);

	useEffect(() => {
		let preview = Object.entries(sneakers.imgs).find(
			([slug, { imgId, name, thumb, img }]) => productId === imgId
		);
		setproductDetail(preview);
	}, [productId]);

	let productLength = Object.keys(sneakers.imgs).length;
	const [slug, { img, thumb }] = productDetail;
	const { id, tag, name, description, priceOriginal, discount } = sneakers;

	// const handleCheckout = () => {
	// 	dispatch({
	// 		type: "ADD",
	// 		product: { name: "new Product" },
	// 	});
	// };

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
					<button
						className="prev"
						onClick={() =>
							setProductId(productId === 1 ? productLength : productId - 1)
						}
					>
						<img src={previous} alt="" />
					</button>
					<button
						className="next"
						onClick={() =>
							setProductId(productId === productLength ? 1 : productId + 1)
						}
					>
						<img src={next} alt="" />
					</button>
					<div className="product-showcase__list">
						{Object.entries(sneakers.imgs).map(
							([slug, { imgId, name, thumb, img }]) => {
								const style =
									productId === imgId
										? "thumbnail thumbnail--active"
										: "thumbnail";
								return (
									<div
										className={style}
										title={name}
										onClick={() => setProductId(imgId)}
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
					<p className="product-information__label">{tag}</p>
					<h1 className="product-information__name">{name}</h1>
					<p className="product-information__detail">{description}</p>
					<div className="product-information__price-discount">
						<h2>
							${priceOriginal - (discount / 100) * priceOriginal}
							<span>.00</span>
						</h2>
						<div className="discount">{discount}%</div>
						<h3 className="mobile-real">${priceOriginal}.00</h3>
					</div>
					<h3 className="product-information__price-real">
						${priceOriginal}.00
					</h3>
					<div className="product-information__form">
						<div className="product-information__form-amount">
							<button onClick={minus}>
								<img className="minus" src={minusIcon} alt="Minus" />
							</button>
							<input type="number" value={input.toString()} onChange={change} />
							<button onClick={plus}>
								<img src={plusIcon} alt="Plus" />
							</button>
						</div>

						<button
							className="product-information__form-cta"
							// onClick={handleCheckout}
							onClick={
								input
									? () => {
											dispatch({
												type: "ADD",
												product: {
													id: id,
													thumb: thumb,
													name: name,
													quantity: input,
													priceFinal:
														priceOriginal - (discount / 100) * priceOriginal,
												},
												quantity: input,
											});
									  }
									: null
							}
						>
							Add to cart
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
