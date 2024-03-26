import styles from "./CarItem.module.css";
import seatorImg from "../../assets/svg/carListIconOne.svg";
import manualImg from "../../assets/svg/carListIconTwo.svg";
import speedImg from "../../assets/svg/carListIconThree.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCars } from "../../context/CarItemsContext";
import { useHomeVariants } from "../../context/HomeVariantsContext";
import { useTheam } from "../../context/TheamContext";
import PopupNotificationDelete from "../Popup/PopupNotification/PopupNotificationDelete";
import { useRef } from "react";

export default function CarItem({ item }) {
  const { mainImge, carName, seator, transmission, speed, price } = item;
  const { addToCart } = useCars();
  const { homeVariant } = useHomeVariants();
  const { isFakeDark } = useTheam();
  const snackbarRef = useRef(null);

  function handelBuyNow(item) {
    addToCart(item);
    snackbarRef.current.showPopupsuccs();
  }

  return (
    <motion.div
      className={styles.carItem}
      variants={homeVariant}
      initial="hidden"
      whileInView="visible"
    >
      <img
        src={mainImge}
        alt={`car ${mainImge}`}
        className={isFakeDark ? "fakeThem" : ""}
      />
      <div className={styles.discriptionCard}>
        <h3>{carName}</h3>
        <div className={styles.properties}>
          <div className={styles.inner}>
            <img src={seatorImg} alt="seator svg" />
            <p>
              <span>{seator}</span> Seator
            </p>
          </div>
          <div className={styles.inner}>
            <img src={manualImg} alt="seator svg" />
            <p>{transmission}</p>
          </div>
          <div className={styles.inner}>
            <img src={speedImg} alt="seator svg" />
            <p>{speed}KM/1-lt</p>
          </div>
        </div>
        <p>Starting at ${price}/Day</p>
      </div>
      <div className={styles.buttons}>
        <Link to={`details/${item.id}`}>
          <Button className={styles.buttonDetails}>Details &gt;</Button>
        </Link>
        {/* <Button onClickHandler={() => addToCart(item)}>Buy Now</Button> */}
        <Button onClickHandler={() => handelBuyNow(item)}>Buy Now</Button>
      </div>

      <PopupNotificationDelete
        styless={"addedFromHome"}
        ref={snackbarRef}
        message={"Item Added Successfully!"}
      />
    </motion.div>
  );
}
