import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import close from "../assets/images/icon-close.svg";

function Sidebar({ isOpen, closeSidebar }) {
  const style = isOpen ? "sidebar sidebar--open" : "sidebar sidebar--closed";
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {isOpen && (
            <motion.div
              className="backdrop"
              onClick={closeSidebar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: {
                  // delay: 0.3,
                },
              }}
            ></motion.div>
          )}
          {/* <motion.nav className={style}> */}
          <motion.nav
            className="sidebar"
            initial={{ x: "-100%" }}
            animate={{
              x: isOpen ? 0 : "-100%",
              transition: {
                // type: "tween",

                type: "spring",
                stiffness: 50,
                // duration: 0.2,
              },
            }}
            exit={{
              x: "-160%",
              // transition: {
              //   duration: 10.5,
              // },
            }}
          >
            <button onClick={closeSidebar}>
              <img src={close} alt="Close" />
            </button>

            <ul>
              <li>
                <a className="link" href="#" onClick={closeSidebar}>
                  Collections
                </a>
              </li>
              <li>
                <a className="link" href="#" onClick={closeSidebar}>
                  Men
                </a>
              </li>
              <li>
                <a className="link" href="#" onClick={closeSidebar}>
                  Women
                </a>
              </li>
              <li>
                <a className="link" href="#" onClick={closeSidebar}>
                  About
                </a>
              </li>
              <li>
                <a className="link" href="#" onClick={closeSidebar}>
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
