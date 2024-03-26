import PageNav from "../../components/PageNav/PageNav";
import { useTheam } from "../../context/TheamContext";
import styles from "./Catalogue.module.css";
function Catalogue() {
  const { isFakeDark } = useTheam();
  return (
    <div>
      <PageNav
        className={` ${isFakeDark ? styles.theamBgColor : styles.bgColor}`}
      />
      Catalogue Not Yet :(
    </div>
  );
}

export default Catalogue;
