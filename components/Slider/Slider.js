import styles from "./Slider.module.css";
import SliderCarousel from "./SliderCarousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { useHomeVariants } from "../../context/HomeVariantsContext";

export default function Slider() {
  const { homeVariant } = useHomeVariants();
  return (
    <div className={styles.slider}>
      <motion.div
        className={`container ${styles.sliderContainer}`}
        variants={homeVariant}
        initial="hidden"
        whileInView="visible"
      >
        <SliderCarousel />
        <div className={styles.sliderBg}></div>
      </motion.div>
    </div>
  );
}
