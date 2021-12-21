import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";
import product1Thumb from "../assets/images/image-product-1-thumbnail.jpg";
import product2Thumb from "../assets/images/image-product-2-thumbnail.jpg";
import product3Thumb from "../assets/images/image-product-3-thumbnail.jpg";
import product4Thumb from "../assets/images/image-product-4-thumbnail.jpg";

export const sneakers = {
	id: 1234567890,
	tag: "Sneaker Company",
	name: "Fall Limited Edition Sneakers",
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
	priceOriginal: 250,
	discount: 0,
	imgs: {
		product1: {
			imgId: 1,
			name: "Product 1",
			img: product1,
			thumb: product1Thumb,
		},
		product2: {
			imgId: 2,
			name: "Product 2",
			img: product2,
			thumb: product2Thumb,
		},
		product3: {
			imgId: 3,
			name: "Product 3",
			img: product3,
			thumb: product3Thumb,
		},
		product4: {
			imgId: 4,
			name: "Product 4",
			img: product4,
			thumb: product4Thumb,
		},
	},
};
