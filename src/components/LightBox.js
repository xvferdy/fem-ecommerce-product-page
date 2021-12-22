import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nextIcon from "../assets/images/icon-next.svg";
import previousIcon from "../assets/images/icon-previous.svg";
import close from "../assets/images/icon-close.svg";
import { sneakers } from "../utils/sneakers";
import useSelect from "../hooks/useSelect";

function LightBox({ setLightBoxShowing, initialImg, initialProductId }) {
  const { selectedImgId, img, prev, select, next } = useSelect(
    initialProductId,
    initialImg
  );

  return (
    <div className="light-box">
      <motion.div
        className="light-box__backdrop"
        onClick={setLightBoxShowing}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,

          transition: {
            // type: "tween",
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            // type: "tween",
            delay: 0.35,
          },
        }}
      ></motion.div>

      <motion.div
        className="product-showcase"
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
          },
        }}
        exit={{
          opacity: 0,
          y: "-100vh",
          transition: {
            duration: 0.35,
          },
        }}
      >
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
          <AnimatePresence exitBeforeEnter initial={false}>
            {/* first it begin wtih initialImg (img) and after that will modified to an array */}
            <motion.img
              className="show"
              src={img}
              alt="product"
              key={selectedImgId && selectedImgId}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
            />
          </AnimatePresence>
        </figure>
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
      </motion.div>
    </div>
  );
}

export default LightBox;
