import { FC } from "react";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <hr />
      <div>
        <p className={styles.footer_text}>&#9752; Kyiv, Ukraine</p>
        <p className={styles.copy}>&copy; 2021 - 2023</p>
      </div>
      <div>
        <p className={styles.footer_text}>for all requests: </p>
        <a className={styles.footer_link} href='mailto:olhahirman@gmail.com'>
          &#9993; Send Email{" "}
        </a>
      </div>
      <div>
        <p className={styles.footer_text}> Hirman Serhiy:</p>
        <a className={styles.footer_link} href='tel:+380997765987'>
          {" "}
          <p className={styles.phone}> +38 099 776 59 87</p>
        </a>
        <p className={styles.footer_text}>Hirman Olha:</p>
        <a className={styles.footer_link} href='tel:+380667981428'>
          {" "}
          <p className={styles.phone}> +38 066 798 14 28</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
