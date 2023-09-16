import { FC } from "react";
import styles from "./Gallery.module.scss";

const Gallery: FC = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <div className={styles.image}>
            <img width={300} height={100} src='/slides/slide10.jpg' alt='' />
          </div>
          <div className={styles.image}>
            <img width={100} height={200} src='/slides/slide2.jpeg' alt='' />
          </div>
          <div className={styles.image}>
            <img width={100} height={200} src='/slides/slide3.jpeg' alt='' />
          </div>
          <div className={styles.image}>
            <img width={300} height={100} src='/slides/slide11.jpeg' alt='' />
          </div>
          <div className={styles.image}>
            <img width={100} height={200} src='/slides/slide12.jpg' alt='' />
          </div>
          <div className={styles.image}>
            <img width={100} height={200} src='/slides/slide21.jpeg' alt='' />
          </div>
          <div className={styles.image}>
            <img width={100} height={200} src='/slides/slide22.jpg' alt='' />
          </div>
          <div className={styles.image}>
            <img width={100} height={200} src='/slides/slide7.png' alt='' />
          </div>
          <div className={styles.image}>
            <img width={100} height={200} src='/slides/slide17.jpeg' alt='' />
          </div>
          <div className={styles.image}>
            <img width={100} height={200} src='/slides/slide18.png' alt='' />
          </div>
          <div className={styles.image}>
            <img width={100} height={200} src='/slides/slide15.jpeg' alt='' />
          </div>
          <div className={styles.image}>
            <img width={100} height={200} src='/slides/slide19.jpg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
