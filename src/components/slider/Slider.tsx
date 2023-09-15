import { useState } from "react";
import styles from "./Slider.module.scss";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: "ola.jpg",
      description: (
        <>
          <br />
          <h3 className={styles.name}>Гірман Ольга</h3>
          <p className={styles.description}>
            <br />
            <span className={styles.year}>2021</span> - Переможниця XІX-го
            Всеукраїнського конкурсу 'Український сомельє 2021' <br />
            <br />
            <span className={styles.year}>2019</span> - Фіналістка конкурсу
            'Кращий сомельє України' <br />
            <br />
            <span className={styles.year}>2019</span> - Maitre fromager
          </p>
        </>
      ),
    },
    {
      image: "serg1.jpg",
      description: (
        <>
          <br />
          <h3 className={styles.name}>Гірман Сергій</h3>
          <p className={styles.description}>
            <br />
            <span className={styles.year}>2021</span> - Півфіналіст конкурсу
            'Найкращий сомельє України' 2021 року'
            <br />
            <br />
            <span className={styles.year}>2020</span> - Переможець XVIII-го
            Всеукраїнського конкурсу 'Український сомельє - 2020'
            <br />
            <br />
            <span className={styles.year}>2019</span> - Півфіналіст XVII
            Всеукраїнського конкурсу 'Сомельє та виноробів 2019 року' <br />{" "}
            <hr />
            Робота з найбільшою колекцією віскі у Західній Європі.
          </p>
        </>
      ),
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.prev} onClick={handlePrev}>
        &#171;
      </button>
      <div className={styles.img_wrapper}>
        <img
          src={slides[currentIndex].image}
          alt={`Slider Image ${currentIndex}`}
        />
        <p>{slides[currentIndex].description}</p>
      </div>
      <button className={styles.next} onClick={handleNext}>
        &#187;
      </button>
    </div>
  );
};

export default Slider;
