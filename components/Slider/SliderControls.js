import styles from "./SliderControls.module.css";
import ArrowLeft from "../ArrowsIcon/ArrowLeft/ArrowLeft";
import ArrowRight from "../ArrowsIcon/ArrowRight/ArrowRight";
import { useTheam } from "../../context/TheamContext";
function SliderControls({ next, previous }) {
  const { isFakeDark } = useTheam();
  return (
    <div className={styles.arrowsContainer}>
      <SliderButton
        onClick={() => previous()}
        className={`${styles.arrow}  ${isFakeDark ? styles.themArrow : ""}   ${
          styles.left
        }`}
      >
        <ArrowLeft />
      </SliderButton>
      <SliderButton
        onClick={() => next()}
        className={`${styles.arrow}  ${isFakeDark ? styles.themArrow : ""} ${
          styles.right
        }`}
      >
        <ArrowRight />
      </SliderButton>
    </div>
  );
}

function SliderButton({ onClick, children, className }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default SliderControls;
