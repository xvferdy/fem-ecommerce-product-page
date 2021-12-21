import React, { useState, useEffect } from "react";

import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";
import close from "../assets/images/icon-close.svg";
import { sneakers } from "../utils/sneakers";
import productDemo from "../assets/images/image-product-1.jpg";
function LightBox({ setLightBoxShowing, initialImg, initialProductId }) {
	const [productId, setProductId] = useState(initialProductId);

	const [productDetail, setproductDetail] = useState(initialImg); // initialImg to []
	const [slug, { imgId, name, thumb, img }] = productDetail;

	let productLength = Object.keys(sneakers.imgs).length;

	useEffect(() => {
		let preview = Object.entries(sneakers.imgs).find(
			([slug, { imgId, name, thumb, img }]) => productId === imgId
		);
		setproductDetail(preview);
	}, [productId]);

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
