import React, { useState, useEffect, useContext } from "react";

// hooks
import useToggle from "../hooks/useToggle";
import useNumInput from "../hooks/useNumInput.js";
import useSelect from "../hooks/useSelect";

// media
import productDemo from "../assets/images/image-product-1.jpg";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import nextIcon from "../assets/images/icon-next.svg";
import previousIcon from "../assets/images/icon-previous.svg";
import cart from "../assets/images/icon-cart.svg";

// components
import LightBox from "../components/LightBox";

// contexts
import { DispatchCartsContext } from "../contexts/Carts.context";

// utils
import { sneakers } from "../utils/sneakers";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

function Home() {
	// custom hooks
	const [lightBoxShowing, setLightBoxShowing] = useToggle();
	const { input, minus, change, plus, reset } = useNumInput(0);

	// hooks?
	// const [productId, setProductId] = useState(1);
	// const [productDetail, setproductDetail] = useState(productDemo); // projectDemo to []
	// const [slug, { img, thumb }] = productDetail; // thumb use at dispatch
	// useEffect(() => {
	// 	let preview = Object.entries(sneakers.imgs).find(
	// 		([slug, { imgId, name, thumb, img }]) => productId === imgId
	// 	);
	// 	setproductDetail(preview);
	// }, [productId]);

	// hooks
	const { selectedImgId, thumb, img, prev, select, next } = useSelect(
		1,
		productDemo
	);

	// contexts
	const dispatch = useContext(DispatchCartsContext);

	// utils
	let productLength = Object.keys(sneakers.imgs).length;
	const { id, tag, name, description, priceOriginal, discount } = sneakers;

	return (
		<div className="home">
			{lightBoxShowing && (
				<LightBox
					// lightBoxShowing={lightBoxShowing}
					setLightBoxShowing={setLightBoxShowing}
					initialImg={img}
					initialProductId={selectedImgId}
				/>
			)}

			<section className="home-container">
				<div className="product-showcase">
					<figure
						className="product-showcase__carousels"
						onClick={setLightBoxShowing}
					>
						{/* first it begin wtih productDemo (img) and after that will modified to an array */}
						<img className="show" src={img} alt="product" />
					</figure>
					<button
						className="prev"
						// onClick={() =>
						// 	setProductId(productId === 1 ? productLength : productId - 1)
						// }
						onClick={prev}
					>
						<img src={previousIcon} alt="" />
					</button>
					<button
						className="next"
						// onClick={() =>
						// 	setProductId(productId === productLength ? 1 : productId + 1)
						// }
						onClick={next}
					>
						<img src={nextIcon} alt="" />
					</button>
					<div className="product-showcase__list">
						{Object.entries(sneakers.imgs).map(
							([slug, { imgId, name, thumb, img }]) => {
								const style =
									selectedImgId === imgId
										? "thumbnail thumbnail--active"
										: "thumbnail";
								return (
									<div
										className={style}
										title={name}
										onClick={() => select(imgId)}
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
												priceFinal:
													priceOriginal - (discount / 100) * priceOriginal,
												quantity: input,
											});
									  }
									: null
							}
						>
							{/* <img src={cart} alt="" /> */}
							<div className="MUI-icon">
								<ShoppingCartTwoToneIcon
									fontSize="large"
									sx={{ marginRight: 2 }}
								/>
							</div>
							Add to cart
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
