import styles from "./FooterItem.module.css";
export default function FooterItem({ section }) {
  return (
    <div key={crypto.randomUUID()} className={styles.itemContainer}>
      <h4 className={styles.itemHeader}> {section.name}</h4>
      <ul className={styles.listOfItems}>
        {section.childern.map((ele) => (
          <li key={crypto.randomUUID()} className={styles.itemList}>
            {ele.icon && (
              <img src={ele.icon} alt="social icons" className={styles.icon} />
            )}
            {ele.svg && <span className={styles.iconContainer}>{ele.svg}</span>}
            {ele.name && <span className={styles.innerText}>{ele.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
