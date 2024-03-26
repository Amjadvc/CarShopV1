import styles from "./SearchSection.module.css";
import carName from "../../assets/svg/serachIconCar.svg";
import price from "../../assets/svg/searchIconPrice.svg";
import capicity from "../../assets/svg/searchIconCapicity.svg";
import brand from "../../assets/svg/searchIconBrand.svg";
import arrowDown from "../../assets/svg/searchIconArrow-down.svg";
import Button from "../Button/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { useHomeVariants } from "../../context/HomeVariantsContext";

const searchdata = [
  {
    id: 1,
    label: "Name",
    icon: carName,
    selectName: "choose name",
    arrowIcon: arrowDown,
    options: ["BMW", "Mercedes-Benz", " Audi"],
  },
  {
    id: 2,
    label: "Price",
    icon: price,
    selectName: "choose price",
    arrowIcon: arrowDown,
    options: ["BMW", "Mercedes-Benz", " Audi"],
  },
  {
    id: 3,
    label: "Engine Capicity",
    icon: capicity,
    selectName: "choose capicity",
    arrowIcon: arrowDown,
    options: ["BMW", "Mercedes-Benz", " Audi"],
  },
  {
    id: 4,
    label: "Brand",
    icon: brand,
    selectName: "choose brand",
    arrowIcon: arrowDown,
    options: ["BMW", "Mercedes-Benz", " Audi"],
  },
];

export default function SearchSection() {
  const { homeVariant } = useHomeVariants();
  return (
    <div className={styles.search}>
      <div className={`container ${styles.searchContener}`}>
        <motion.div
          className={styles.searchContent}
          variants={homeVariant}
          initial="hidden"
          whileInView="visible"
        >
          {searchdata.map((item) => (
            <SearchItem item={item} key={item.id} />
          ))}
          <Button className={styles.customButton}>Serach</Button>
        </motion.div>
      </div>
    </div>
  );
}

function SearchItem({ item }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handelOpenMenu(e) {
    console.log(e.target);
    setIsOpenMenu(!isOpenMenu);
  }
  function handelCloseMenu() {
    setIsOpenMenu(false);
  }

  return (
    <div className={styles.searchItem}>
      <span>{item.label}</span>
      <div className={styles.searchItemContent}>
        <img src={item.icon} alt="car-icon" />
        <span>{item.selectName}</span>
        <button
          className={styles.openMenu}
          onClick={() => handelOpenMenu(item)}
        >
          <img src={item.arrowIcon} alt="arrow-dwon" />
        </button>
      </div>
      {isOpenMenu && (
        <ul className={styles.listItem}>
          {item.options?.map((option, index) => (
            <li key={index} className={styles.option} onClick={handelCloseMenu}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
