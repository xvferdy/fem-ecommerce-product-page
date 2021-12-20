import React from "react";

import product from "../assets/images/image-product-1.jpg";
import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";
import close from "../assets/images/icon-close.svg";

function LightBox({ setLightBoxShowing }) {
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
					<img className="show" src={product} alt="product 1" />
				</figure>
				<button className="prev">
					<img src={previous} alt="" />
				</button>
				<button className="next">
					<img src={next} alt="" />
				</button>

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
