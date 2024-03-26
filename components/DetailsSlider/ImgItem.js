import { useTheam } from "../../context/TheamContext";
import styles from "./ImgItem.module.css";
function ImgItem({ img, index, handelIndex, sliderIndex }) {
  const { isFakeDark } = useTheam();
  return (
    <div
      className={`${styles.imgItem} ${
        index === sliderIndex && styles.active
      }  ${isFakeDark ? styles.theamImgItem : ""}`}
      onClick={() => handelIndex(index)}
    >
      <img
        src={img}
        alt="img "
        className={`${styles.innerImge} ${isFakeDark ? "fakeThem" : ""}`}
      />
    </div>
  );
}

export default ImgItem;
