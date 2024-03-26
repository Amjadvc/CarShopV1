import styles from "./ArrowToTopBtn.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
function ArrowToTopBtn() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1033) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  function handelArrowUp() {
    window.scrollTo({
      top: -20,
      behavior: "smooth",
    });
  }

  return (
    <button
      className={`${styles.arrowUp} ${backToTop ? styles.showArrow : ""}`}
      onClick={handelArrowUp}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

export default ArrowToTopBtn;
