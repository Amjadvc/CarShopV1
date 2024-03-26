import styles from "./StarList.module.css";
import Star from "./Star";
function StarList({ defaultRating }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }, (_, i) => {
        return (
          <Star
            size={28}
            color={`var(--color-primary-1)`}
            key={i}
            full={i < defaultRating ? true : false}
          />
        );
      })}
      <strong>{defaultRating}</strong>
    </div>
  );
}

export default StarList;
