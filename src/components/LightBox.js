import React, { useState, useEffect } from "react";

import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";
import close from "../assets/images/icon-close.svg";
import sneakers from "../utils/sneakers";
import productDemo from "../assets/images/image-product-1.jpg";
function LightBox({ setLightBoxShowing, initialImg, initialProduct }) {
	const [product, setProduct] = useState(initialProduct);

	const [productDetail, setproductDetail] = useState(initialImg); // initialImg to []
	const [slug, { id, name, thumb, img }] = productDetail;

	console.log(productDetail);
	useEffect(() => {
		let preview = Object.entries(sneakers).find(
			([slug, { id, name, thumb, img }]) => product === slug
		);
		setproductDetail(preview);
	}, [product]);

	return (
		<div className="light-box">
			<div className="light-box__backdrop" onClick={setLightBoxShowing}></div>

			<div className="product-showcase">
				<img
					className="close"
					src={close}
					alt=""
					onClick={setLightBoxShowing}
				/>

				<figure
					className="product-showcase__carousels"
					onClick={setLightBoxShowing}
				>
					{/* first it begin wtih initialImg (img) and after that will modified to array */}
					<img className="show" src={img} alt="product" /> /
				</figure>
				<button className="prev">
					<img src={previous} alt="" />
				</button>
				<button className="next">
					<img src={next} alt="" />
				</button>

				<div className="product-showcase__list">
					{Object.entries(sneakers).map(([slug, { id, name, thumb, img }]) => {
						const style =
							product === slug ? "thumbnail thumbnail--active" : "thumbnail";
						return (
							<div
								className={style}
								title={name}
								onClick={() => setProduct(slug)}
							>
								<img
									className="product-showcase__list-item"
									src={thumb}
									alt={name}
								/>
							</div>
						);
					})}

					{/* <div className="thumbnail">
						<img className="product-showcase__list-item" src={product} alt="" />
					</div>
					<div className="thumbnail">
						<img className="product-showcase__list-item" src={product} alt="" />
					</div>
					<div className="thumbnail">
						<img className="product-showcase__list-item" src={product} alt="" />
					</div>
					<div className="thumbnail">
						<img className="product-showcase__list-item" src={product} alt="" />
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default LightBox;
