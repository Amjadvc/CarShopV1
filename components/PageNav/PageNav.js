import styles from "./PageNav.module.css";
import Logo from "../Logo/Logo";
import myCart from "../../assets/svg/mycart.svg";
import ButtonNavBar from "../NavBar/ButtonNavBar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useCars } from "../../context/CarItemsContext";
import { useTheam } from "../../context/TheamContext";

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function PageNav({ className }) {
  const [isActive, setIsActive] = useState(false);
  const { quantity } = useCars();
  const { handelFakeDark, isFakeDark } = useTheam();

  function handelIsActive() {
    setIsActive(!isActive);
  }

  return (
    <nav className={`${styles.nav} ${className}`}>
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`container ${styles.navRaber}`}
      >
        <Logo />

        <ButtonNavBar handelIsActive={handelIsActive} isActive={isActive} />

        <ul className={`${styles.listOne} ${isActive ? styles.barActive : ""}`}>
          <li>
            <NavLink to={"/"} className={`${styles.link} ${className}`}>
              Home
            </NavLink>
            <span className={styles.line}></span>
          </li>

          <li>
            <NavLink
              to={"/catalogue"}
              className={`${styles.link} ${className}`}
            >
              Catalogue
            </NavLink>
            <span className={styles.line}></span>
          </li>
          <li>
            <NavLink
              to={"/contact-us"}
              className={`${styles.link} ${className}`}
            >
              Contact Us
            </NavLink>
            <span className={styles.line}></span>
          </li>
          <li>
            <NavLink to={"/help"} className={`${styles.link} ${className}`}>
              Help
            </NavLink>
            <span className={styles.line}></span>
          </li>
        </ul>

        <ul className={`${styles.listTwo} ${isActive ? styles.barActive : ""}`}>
          <li>
            <NavLink to={"/cart"} className={styles.cart}>
              <img className={styles.cartIcon} src={myCart} alt="cart" />
              <div className={styles.cartCount}>{quantity}</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/register"}
              className={`${styles.link} ${styles.register}`}
            >
              Register
            </NavLink>
          </li>
          <li>
            <button onClick={handelFakeDark} className={styles.btnThem}>
              {isFakeDark ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default PageNav;
