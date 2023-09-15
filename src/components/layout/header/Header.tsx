import Link from "next/link";
import { FC, useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image priority src='/logoWF.svg' alt='' width={150} height={100} />
      </Link>
      <div className={styles.burgerMenu}>
        <button className={styles.burgerButton} onClick={handleMenuClick}>
          <Image
            src={isMenuOpen ? "/menu_close.svg" : "/menu_open.svg"}
            alt='Burger Menu'
            width={40}
            height={40}
          />
        </button>
        <nav className={`${styles.headerNav} ${isMenuOpen ? styles.open : ""}`}>
          <div>
            <Link className={styles.link} href='/about'>
              Про нас
            </Link>
          </div>
          <div>
            <Link className={styles.link} href='/degustation'>
              Дегустації
            </Link>
          </div>
          <div>
            <Link className={styles.link} href='/contacts'>
              Контакти
            </Link>
          </div>
          <div>
            <Link className={styles.link} href='/gallery'>
              Галерея
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
