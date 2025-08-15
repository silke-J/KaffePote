import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Slider.module.css";

const slides = [
  {
    image: "../../../public/headerslider1.jpg",
    title: "#KaffePote",
    subtitle: "#BunnySoCute",
  },
  {
    image: "../../../public/headerslider2.jpg",
    title: "#KaffePote",
    subtitle: "#BunnyLife",
  },
  {
    image: "../../../public/headerslider3.jpg",
    title: "#KaffePote",
    subtitle: "#BunnyLovers",
  },
  {
    image: "../../../public/headerslider4.jpg",
    title: "#KaffePote",
    subtitle: "#MyBunny",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { image, title, subtitle } = slides[current];

  return (
    <div className={styles.slider}>
      <img src={image} alt="slide" />

      <div className={styles.textInfo}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <button onClick={prevSlide} className={styles.leftButton}>
        <ChevronLeft size={40} />
      </button>
      <button onClick={nextSlide} className={styles.rightButton}>
        <ChevronRight size={40} />
      </button>

      <div className={styles.Title}>
        <h3>
          Det er nogle af dem, der har været hos jer og mødt kaninerne. De har
          lagt billeder op på Instagram og tagget jer. Kig gerne ind, tag
          billeder og husk at tagge os. #KaffePote
        </h3>
      </div>
    </div>
  );
};
export default Slider;
