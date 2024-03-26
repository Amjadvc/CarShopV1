import { useEffect, useState } from "react";
import { useCars } from "../../context/CarItemsContext";
import styles from "./CookiesBanner.module.css";
function CookiesBanner() {
  const { acceptCookies, setAcceptCookies } = useCars();
  const [activeWarning, setActiveWarning] = useState(false);

  function handelAccept() {
    setAcceptCookies(true);
  }

  function handelReject() {
    setAcceptCookies(false);
  }

  useEffect(() => {
    if (acceptCookies === false) {
      setActiveWarning(true);
      const timeoutId = setTimeout(() => {
        setActiveWarning(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [acceptCookies]);

  return (
    <>
      <div
        className={`${styles.cookiesBanner} ${
          acceptCookies === true || acceptCookies === false ? styles.hide : ""
        } `}
      >
        <div className={styles.cookiesContent}>
          <h3>How we use cookies</h3>
          <p>
            This website uses cookies and similar technologies to enhance site
            navigation, analyse site usage, and help in our marketing efforts.
            You can continue to our website by accepting or rejecting cookies,
            if you choose accepting the cart data will be save for latter , if
            you choose rejecting the cart data will not be save.
          </p>
        </div>
        <div className={styles.CookiesBtns}>
          <button onClick={handelAccept}>Accept</button>
          <button onClick={handelReject}>Reject</button>
        </div>
      </div>

      <div
        className={`${styles.warning} ${
          activeWarning === true ? styles.showWarinig : ""
        }`}
      >
        <div className={styles.warningSymbol}>
          <span>&#9888;</span>
        </div>
        <div className={styles.warningContent}>
          <p> Warning the cart data will not be saved..</p>
        </div>
      </div>
    </>
  );
}

export default CookiesBanner;
