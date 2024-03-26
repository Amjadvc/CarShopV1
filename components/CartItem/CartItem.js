import styles from "./CartItem.module.css";
import deleteIcon from "../../assets/images/close_24px.png";
import { useTheam } from "../../context/TheamContext";

function CartItem({ item, setShwoPopupD, setItemToDelete }) {
  const {
    mainImge,
    carName,
    code,
    engineCopacity,
    price,
    choosenColor,
    quantity,
  } = item;
  const { isFakeDark } = useTheam();

  function handelDelete(item) {
    setShwoPopupD(true);
    setItemToDelete(item);
  }

  return (
    <tr className={`${styles.itemTr} ${isFakeDark ? "fakeThem" : ""}`}>
      <td datalabel="Product">
        <div className={styles.productContainer}>
          <img src={mainImge} alt={mainImge} className={styles.imgeTabel} />
          <div className={styles.productDetails}>
            <h4 className={styles.carType}>{carName}</h4>
            <p>Code:{code}</p>
            <p>Engine Copacity:{engineCopacity}</p>
          </div>
        </div>
      </td>
      <td datalabel="Totla Price">{price}</td>
      <td datalabel="Price">{price / quantity}</td>
      <td datalabel="Quantity">{quantity}</td>
      <td datalabel="Color">{choosenColor}</td>
      <td datalabel="Delete">
        <button className={styles.btn} onClick={() => handelDelete(item)}>
          <img src={deleteIcon} alt="delete icon" />
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
