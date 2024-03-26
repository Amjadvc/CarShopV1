import styles from "./ButtonNavBar.module.css";
import ButtomBar from "./ButtomBar";
import ButtomCross from "./ButtomCross";

export default function ButtonNavBar({ handelIsActive, isActive }) {
  return (
    <div className={styles.buttonContainer} onClick={handelIsActive}>
      {isActive ? <ButtomCross /> : <ButtomBar />}
    </div>
  );
}
