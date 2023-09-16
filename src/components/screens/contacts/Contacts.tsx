import { FC } from "react";
import styles from "./Contacts.module.scss";

const Contacts: FC = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.wrapper}>
        <h3 className={styles.info}>
          Personal sommelier
          <br /> 📍Kyiv, Ukraine
          <p>for all requests for cooperation </p>
          <a href='mailto:olhahirman@gmail.com'>📩 Send Email </a>
          <p>
            Call us at: <br />
            <span> Hirman Serhiy:</span>
            <a href='tel:+380997765987'> +38 099 776 59 87</a>
            <br />
            <span>Hirman Olha:</span>
            <a href='tel:+380667981428'> +38 066 798 14 28</a>
          </p>
        </h3>
      </div>
    </div>
  );
};

export default Contacts;
// olhahirman@gmail.com
