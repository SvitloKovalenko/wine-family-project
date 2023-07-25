import { useState } from "react";
import styles from "./Slider.module.scss";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: "olia.jpg",
      description: (
        <>
          <h3 className={styles.name}>Гірман Ольга</h3>
          <p>
            <span className={styles.year}>2021</span> - Переможниця XІX-го
            Всеукраїнського конкурсу 'Український сомельє{" "}
            <span className={styles.yearSmall}>2021</span>' <br />{" "}
            <span className={styles.year}>2019</span> - Фіналістка конкурсу
            'Кращий сомельє України' <br />
            <span className={styles.year}>2019</span> - Maitre fromager
          </p>
        </>
      ),
    },
    {
      image: "serg1.jpg",
      description: (
        <>
          <h3 className={styles.name}>Гірман Сергій</h3>
          <p>
            <span className={styles.year}>2021</span> - Півфіналіст конкурсу
            'Найкращий сомельє України'
            <span className={styles.yearSmall}>2021</span> року'
            <br />
            <span className={styles.year}>2020</span> - Переможець XVIII-го
            Всеукраїнського конкурсу 'Український сомельє -{" "}
            <span className={styles.yearSmall}>2020</span>'<br />
            <span className={styles.year}>2019</span> - Півфіналіст XVII
            Всеукраїнського конкурсу 'Сомельє та виноробів{" "}
            <span className={styles.yearSmall}>2019</span> року' <br /> <hr />
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
