import { useState, useEffect } from "react";
import { sneakers } from "../utils/sneakers";

// const [productId, setProductId] = useState(1);
// const [productDetail, setproductDetail] = useState(productDemo); // projectDemo to []
// const [slug, { img, thumb }] = productDetail;
// useEffect(() => {
// 	let preview = Object.entries(sneakers.imgs).find(
// 		([slug, { imgId, name, thumb, img }]) => productId === imgId
// 	);
// 	setproductDetail(preview);
// }, [productId]);

// const [productId, setProductId] = useState(initialProductId);
// const [productDetail, setproductDetail] = useState(initialImg); // initialImg to []
// const [slug, { imgId, name, thumb, img }] = productDetail;
// useEffect(() => {
// 	let preview = Object.entries(sneakers.imgs).find(
// 		([slug, { imgId, name, thumb, img }]) => productId === imgId
// 	);
// 	setproductDetail(preview);
// }, [productId]);

let productLength = Object.keys(sneakers.imgs).length;

export default (productId, productDetail) => {
	const [selectedImgId, setSelectedImgId] = useState(productId);
	const [detail, setDetail] = useState(productDetail); // projectDemo to [] & initialImg to []
	const [slug, { imgId, name, thumb, img }] = detail;

	useEffect(() => {
		let preview = Object.entries(sneakers.imgs).find(
			([slug, { imgId, name, thumb, img }]) => selectedImgId === imgId
		);
		setDetail(preview);
	}, [selectedImgId]);

	return {
		selectedImgId,
		detail,
		prev: () => {
			setSelectedImgId(selectedImgId === 1 ? productLength : selectedImgId - 1);
		},
		select: (productImgId) => {
			setSelectedImgId(productImgId);
		},
		next: () => {
			setSelectedImgId(selectedImgId === productLength ? 1 : selectedImgId + 1);
		},
		img,
		thumb,
	};
};
