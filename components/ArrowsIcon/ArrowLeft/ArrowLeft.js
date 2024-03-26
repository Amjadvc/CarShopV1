import styles from "./ArrowLeft.module.css";
function ArrowLeft() {
  return (
    <svg
      width="12"
      height="17"
      viewBox="0 0 12 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.arrowLeft}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 17L0.5 8.5L11.5 0L11.5 17Z"
        fillOpacity="0.2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 17L0.5 8.5L11.5 0L11.5 17Z"
        className="inner"
      />
    </svg>
  );
}

export default ArrowLeft;
