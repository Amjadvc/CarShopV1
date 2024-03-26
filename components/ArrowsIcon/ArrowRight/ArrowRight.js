import styles from "./ArrowRight.module.css";
function ArrowRight() {
  return (
    <svg
      width="12"
      height="17"
      viewBox="0 0 12 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.arrowRight}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 -1.19209e-07L11.5 8.5L0.5 17L0.5 -1.19209e-07Z"
        fill="white"
        className="inner"
      />
    </svg>
  );
}

export default ArrowRight;
