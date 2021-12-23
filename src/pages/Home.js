import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useToggle from "../hooks/useToggle";
import useNumInput from "../hooks/useNumInput.js";
import useSelect from "../hooks/useSelect";
import productDemo from "../assets/images/image-product-1.jpg";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import nextIcon from "../assets/images/icon-next.svg";
import previousIcon from "../assets/images/icon-previous.svg";
import LightBox from "../components/LightBox";
import { DispatchCartsContext } from "../contexts/Carts.context";
import { sneakers } from "../utils/sneakers";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";

function Home() {
  const [lightBoxShowing, setLightBoxShowing] = useToggle();
  const { input, minus, change, plus, reset } = useNumInput(0);
  const { selectedImgId, thumb, img, prev, select, next, prevSelectedImgId } =
    useSelect(1, productDemo);

  const dispatch = useContext(DispatchCartsContext);
  const { id, tag, name, description, priceOriginal, discount } = sneakers;

  return (
    <div className="home">
      <AnimatePresence exitBeforeEnter initial={false}>
        {lightBoxShowing && (
          <LightBox
            // lightBoxShowing={lightBoxShowing}
            setLightBoxShowing={setLightBoxShowing}
            initialImg={img}
            initialProductId={selectedImgId}
          />
        )}
      </AnimatePresence>

      <section className="home-container">
        <div className="product-showcase">
          <figure
            className="product-showcase__carousels"
            onClick={setLightBoxShowing}
          >
            {/* first it begin wtih productDemo (img) and after that will modified to an array */}
            <AnimatePresence exitBeforeEnter initial={false}>
              <motion.img
                className="show"
                src={img}
                alt="product"
                key={selectedImgId && selectedImgId}
                initial={{
                  scaleY: 0.5,
                  x: selectedImgId > prevSelectedImgId ? -666 : 666, // FIXME:
                  filter: "blur(2px)",
                }}
                animate={{
                  x: 0,
                  scaleY: 1,
                  filter: "blur(0)",
                  transition: {
                    duration: 0.25,
                  },
                }}
                exit={{
                  x: selectedImgId > prevSelectedImgId ? 666 : -666, // FIXME:
                  filter: "blur(2px)",
                  scaleY: 0.5,
                  transition: {
                    duration: 0.25,
                  },
                }}
              />
            </AnimatePresence>
          </figure>

          {/* FIXME: REACT IMG PERFORMANCE */}
          <img src={product2} style={{ display: "none" }} alt="product2" />
          <img src={product3} style={{ display: "none" }} alt="product3" />
          <img src={product4} style={{ display: "none" }} alt="product4" />
          <img src={plusIcon} style={{ display: "none" }} alt="plus-icon" />
          <img src={minusIcon} style={{ display: "none" }} alt="minus-icon" />
          {/* REACT IMG PERFORMANCE */}

          <button className="prev" onClick={prev}>
            <img src={previousIcon} alt="" />
          </button>
          <button className="next" onClick={next}>
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
                    key={imgId}
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
          <label className="product-information__label">{tag}</label>
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
              <span className="MUI-icon">
                <ShoppingCartTwoToneIcon
                  fontSize="large"
                  sx={{ marginRight: 2 }}
                />
              </span>
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
