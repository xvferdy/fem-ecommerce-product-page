import React from "react";

import product from "../assets/images/image-product-1.jpg";
import avatar from "../assets/images/image-avatar.png";

function LightBox({ setLightBoxShowing }) {
	return (
		<div className="light-box">
			<div className="light-box__backdrop" onClick={setLightBoxShowing}></div>

			<div className="product-showcase">
				<figure
					className="product-showcase__carousels"
					onClick={setLightBoxShowing}
				>
					<img src={product} alt="product 1" />
				</figure>
				<div className="product-showcase__list">
					<div className="border">
						<img className="product-showcase__list-item" src={product} alt="" />
					</div>
					<div className="border">
						<img className="product-showcase__list-item" src={product} alt="" />
					</div>
					<div className="border">
						<img className="product-showcase__list-item" src={product} alt="" />
					</div>
					<div className="border">
						<img className="product-showcase__list-item" src={product} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default LightBox;
