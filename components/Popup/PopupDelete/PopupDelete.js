import styles from "./PopupDelete.module.css";

function PopupDelete({ setShwoPopupD, onYesClick, ItemToDelete }) {
  const { quantity, carName, choosenColor } = ItemToDelete;
  function handelClosePopup() {
    setShwoPopupD((s) => !s);
  }

  return (
    <div className={styles.deletePopup}>
      <button className={styles.close} onClick={handelClosePopup}>
        x
      </button>
      <p className={styles.headerText}>
        Are you sure you want to remove <br />
        <strong style={{ backgroundColor: choosenColor }}>
          <span style={{ color: choosenColor === "white" ? "black" : "" }}>
            {quantity}
          </span>
        </strong>
        {"\n"}
        <span>{choosenColor}</span> {carName} {"\n"}
        {quantity > 1 ? "cars" : "car"} <br />
        {"\n"}from your cart?
      </p>
      <div className={styles.btns}>
        <button onClick={onYesClick}>Yes</button>
        <button onClick={handelClosePopup}>No</button>
      </div>
    </div>
  );
}

export default PopupDelete;
