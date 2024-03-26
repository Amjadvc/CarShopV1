import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import location from "../../assets/svg/footerLcation.svg";
import phone from "../../assets/svg/footerPhone.svg";
import mail from "../../assets/svg/footerMail.svg";
import Facebook from "../SocialIcon/Facebook";
import Instagram from "../SocialIcon/Instagram";
import Twiter from "../SocialIcon/Twiter";

import Waves from "../Waves/Waves";
import FooterItem from "./FooterItem";
function Footer() {
  const footerData = [
    {
      name: <Logo />,
      childern: [{ name: "CAR COMPANY" }],
    },
    {
      name: "Menu",
      childern: [
        { name: "Home" },
        { name: "Car Catalogue" },
        { name: "Services" },
      ],
    },
    {
      name: "Further Information ",
      childern: [{ name: "Terms & Conditions" }, { name: "Privicy Policy" }],
    },
    {
      name: "Contact us",
      childern: [
        { icon: location, name: "647P+4G5,Seif Al-Doleh, Aleppo, Syria" },
        { icon: phone, name: "+96323456" },
        { icon: mail, name: "tagred@gmail.com" },
      ],
    },
    {
      name: "Follow us",
      childern: [
        { svg: <Facebook /> },
        { svg: <Instagram /> },
        { svg: <Twiter /> },
      ],
    },
  ];
  return (
    <footer className={styles.footer}>
      <Waves />
      <div className={`container ${styles.footerContainer}`}>
        {footerData.map((section) => (
          <FooterItem section={section} key={crypto.randomUUID()} />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
