import { FC } from "react";
import styles from "./Degustation.module.scss";

const Degustation: FC = () => {
  return (
    <div className={styles.degustation}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>смакуйте знання</h3>
        <h2 className={styles.subtitle}>наші послуги:</h2>
        <ul className={styles.list}>
          <li>
            <p>Професійна дегустація вин та інших спиртних напоїв</p>
            <hr />
          </li>
          <li>
            <p>Виїзні дегустації на заходах</p>
            <hr />
          </li>
          <li>
            <p>Майстер-класи з вин та віски для широкої аудиторії</p>
            <hr />
          </li>
          <li>
            <p>Навчання персоналу виноторгових компаній та HoReCa</p>
            <hr />
          </li>
          <li>
            <p>Складання винної картки для заходів</p>
            <hr />
          </li>
          <li>
            <p>Персональний підбір вин для винного погребу або на подарунок</p>
            <hr />
          </li>
          <li>
            <p>
              Екскурсії на виноробню з дегустацією вина для компанії (від 4-х
              осіб)
            </p>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Degustation;
