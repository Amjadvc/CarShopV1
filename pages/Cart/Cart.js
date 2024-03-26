import { motion } from "framer-motion";
import styles from "./Cart.module.css";
import PageNav from "../../components/PageNav/PageNav";
import cartBg from "../../assets/svg/cart-bg.svg";
import CartItem from "../../components/CartItem/CartItem";
import { useCars } from "../../context/CarItemsContext";
import { useTheam } from "../../context/TheamContext";
import PopupDelete from "../../components/Popup/PopupDelete/PopupDelete";
import { useRef, useState } from "react";
import PopupNotificationDelete from "../../components/Popup/PopupNotification/PopupNotificationDelete";

const cartHeaderVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      duration: 0.3,
      ease: "easeIn",
      delay: 0.4,
    },
  },
};
const cartEmptyVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
      delay: 1,
    },
  },
};

function Cart() {
  const { deteleFromCart, cartItem } = useCars();

  const [showPopupD, setShwoPopupD] = useState(false);
  const [ItemToDelete, setItemToDelete] = useState();

  const { isFakeDark } = useTheam();
  const snackbarRef = useRef(null);

  // function showPopupsuccs() {
  //   setsShowPopupDSuccess(true);
  //   setTimeout(() => {
  //     setsShowPopupDSuccess(false);
  //   }, 1500);
  // }

  function onYesClick() {
    setShwoPopupD((s) => !s);
    deteleFromCart(ItemToDelete);
    snackbarRef.current.showPopupsuccs();
  }

  console.log(cartItem);

  return (
    <main className={styles.cart}>
      <PageNav className={styles.cartNav} />
      <img src={cartBg} alt="bg" className={styles.bg}></img>

      <div className={`container ${styles.cartContainer}`}>
        <motion.div
          className={styles.cartHeader}
          variants={cartHeaderVariants}
          initial="hidden"
          animate="visible"
        >
          My Cart
        </motion.div>

        <section className={styles.tabelContainr}>
          {cartItem.length === 0 && (
            <motion.div
              className={styles.emptyCart}
              variants={cartEmptyVariants}
              initial="hidden"
              animate="visible"
            >
              <p>Your shopping cart is currently empty.</p>
            </motion.div>
          )}
          {cartItem.length > 0 && (
            <table className={styles.tabel}>
              <thead>
                <tr className={isFakeDark ? "fakeThem" : ""}>
                  <th>Product </th>
                  <th>Totla Price</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Color </th>
                  <th>Delete </th>
                </tr>
              </thead>
              <tbody>
                {cartItem.map((item) => (
                  <CartItem
                    item={item}
                    key={crypto.randomUUID()}
                    setShwoPopupD={setShwoPopupD}
                    onYesClick={onYesClick}
                    setItemToDelete={setItemToDelete}
                  />
                ))}
              </tbody>
            </table>
          )}
          {showPopupD && (
            <PopupDelete
              setShwoPopupD={setShwoPopupD}
              onYesClick={onYesClick}
              ItemToDelete={ItemToDelete}
            />
          )}
          <PopupNotificationDelete
            ref={snackbarRef}
            message={"Item deleted successfully!"}
            // showPopupDSuccess={showPopupDSuccess}
          />
        </section>
      </div>
    </main>
  );
}

export default Cart;
