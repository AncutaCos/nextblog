// ImageCarousel.jsx
"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./ImageCarousel.module.css";

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.imgContainer}>
        <Image
          src={images[currentImage]}
          alt=""
          layout="fill"
          objectFit="cover"
          className={styles.img}
        />
      </div>
      {images.length > 1 && (
        <div className={styles.carouselButtons}>
          <button className={styles.button} onClick={prevImage}>
            &larr;
          </button>
          <button className={styles.button} onClick={nextImage}>
            &rarr;
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
