import styles from "./CarList.module.css";
import CarItem from "./CarItem";

function CarList({ carData }) {
  return (
    <div className={styles.carList}>
      <div className={`container ${styles.carListContainer}`}>
        {carData.map((item) => (
          <CarItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default CarList;
