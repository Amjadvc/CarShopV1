import { motion } from "framer-motion";
import styles from "./LandingPage.module.css";
import carBg from "../../assets/svg/carBg.svg";
import Button from "../Button/Button";
import { useTheam } from "../../context/TheamContext";

const contentVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 60,
      ease: "easeIn",
      duration: 1,
    },
  },
};
const landingCarBgVariants = {
  hidden: {
    x: +100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      ease: "easeIn",
      duration: 1,
    },
  },
};

function LandingPage() {
  const { isFakeDark } = useTheam();
  return (
    <div className={`container ${styles.homeContainr}`}>
      <motion.div
        className={styles.content}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <p className={styles.textHeader}>Arriving Summer 2019</p>
        <h2 className={styles.mainText}>MAKE EVERY DAY LEGENDARY.</h2>
        <p className={styles.textFooter}>
          The culmimination of comfort,luxury,and powerrul living is embodied in
          the First-Ever BMWX7 -the biggest BMW ever built.
        </p>

        <Button>EXPLORE</Button>
      </motion.div>
      <div className={styles.image}>
        <motion.img
          className={`${styles.landingCarBg} ${isFakeDark ? "fakeThem" : ""}`}
          variants={landingCarBgVariants}
          initial="hidden"
          animate="visible"
          src={carBg}
          alt="landing-bg"
        />
      </div>
    </div>
  );
}

export default LandingPage;
