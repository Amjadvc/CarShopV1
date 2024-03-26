import { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./PopupNotificationDelete.module.css";
const PopupNotificationDelete = forwardRef(({ message, styless }, ref) => {
  const [showPopupDSuccess, setsShowPopupDSuccess] = useState(false);
  useImperativeHandle(ref, () => ({
    showPopupsuccs() {
      setsShowPopupDSuccess(true);
      setTimeout(() => {
        setsShowPopupDSuccess(false);
      }, 1500);
    },
  }));
  return (
    <div
      className={`${styles.popupContainer} ${
        showPopupDSuccess ? styles.active : ""
      } ${styles[styless]}`}
    >
      <div className={styles.symbol}>&#x2714;</div>
      <div>{message}</div>
    </div>
  );
});

export default PopupNotificationDelete;
