import { FC } from "react";
import styles from "./About.module.scss";
import Layout from "@/components/layout/Layout";
import Slider from "@/components/slider/Slider";

const About: FC = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <h3>декілька фактів</h3>
        <h1>Про нас</h1>
        <Slider />
      </div>
    </Layout>
  );
};
export default About;
