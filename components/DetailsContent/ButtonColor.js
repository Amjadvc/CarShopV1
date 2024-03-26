import { useTheam } from "../../context/TheamContext";
import styles from "./ButtonColor.module.css";
function ButtonColor({ itemColor, handelActiveColor, isActiveColor }) {
  const { isFakeDark } = useTheam();
  return (
    <button
      onClick={handelActiveColor}
      style={{ backgroundColor: itemColor }}
      className={`${styles.buttonColors} ${isActiveColor && styles.activeColor}
      ${isActiveColor && isFakeDark && styles.theamActiveColor}
      
        ${isFakeDark ? styles.themItemColor : ""}`}
    ></button>
  );
}

export default ButtonColor;
