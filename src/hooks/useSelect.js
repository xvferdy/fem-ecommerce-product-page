import { useState, useEffect } from "react";
import { sneakers } from "../utils/sneakers";

let productLength = Object.keys(sneakers.imgs).length;

export default (productId, productDetail) => {
  const [selectedImgId, setSelectedImgId] = useState(productId);
  const [prevSelectedImgId, setPrevSelectedImgId] = useState(1);
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
    prevSelectedImgId,
    detail,
    prev: () => {
      setSelectedImgId(selectedImgId === 1 ? productLength : selectedImgId - 1);
    },
    select: (productImgId) => {
      setSelectedImgId(productImgId);
      setPrevSelectedImgId(selectedImgId); //FIXME:
    },
    next: () => {
      setSelectedImgId(selectedImgId === productLength ? 1 : selectedImgId + 1);
    },
    img,
    thumb,
  };
};
