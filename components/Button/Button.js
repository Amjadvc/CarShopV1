import styles from "./Button.module.css";

function Button({ children, className, onClickHandler }) {
  return (
    <button onClick={onClickHandler} className={`${styles.btn} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
