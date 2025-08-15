import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Slider.module.css";
import silder2 from "../../../public/headerslider2.jpg";
import silder1 from "../../../public/headerslider1.jpg";
import silder3 from "../../../public/headerslider3.jpg";
import silder4 from "../../../public/headerslider4.jpg";

const slides = [
  {
    image:  silder1 ,
    title: "#KaffePote",
    subtitle: "#BunnySoCute",
  },
  {
    image:  silder2 ,
    title: "#KaffePote",
    subtitle: "#BunnyLife",
  },
  {
    image:  silder3 ,
    title: "#KaffePote",
    subtitle: "#BunnyLovers",
  },
  {
    image:  silder4 ,
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
