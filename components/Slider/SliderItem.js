import { useState } from "react";
import styles from "./SliderItem.module.css";
import { useTheam } from "../../context/TheamContext";
function SliderItem({ item }) {
  const { isFakeDark } = useTheam();
  const [isActiveItem, setIsActiveItem] = useState(false);
  return (
    <div
      className={styles.carItem}
      onMouseEnter={() => setIsActiveItem(true)}
      onMouseLeave={() => setIsActiveItem(false)}
    >
      <img
        src={item.imge}
        alt="car-slider"
        className={isFakeDark ? styles.themImge : ""}
      />
      <div
        className={`${styles.carItemOverlay} ${
          isActiveItem ? styles.activeOverlay : ""
        }`}
      ></div>
      <span
        className={`${styles.carItemInner}  ${
          isActiveItem ? styles.activeSpan : ""
        } ${isFakeDark ? styles.themCarItemInner : ""}`}
      >
        {item.text}
      </span>
    </div>
  );
}

export default SliderItem;
