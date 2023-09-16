import { FC } from "react";
import styles from "./About.module.scss";
import Slider from "@/components/slider/Slider";

const About: FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.wrapper}>
        <h2>декілька фактів</h2>
        <h3>Про нас</h3>
        <Slider />
      </div>
    </div>
  );
};
export default About;
