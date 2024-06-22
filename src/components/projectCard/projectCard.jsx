"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';
import PostContent from '../PostContent';

const ProjectCard = ({ project }) => {
  const { title, description, image1, image2, image3, image4, image5 } = project;
  const images = [image1, image2, image3, image4, image5].filter(Boolean);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.projectCard}>
      {images.length > 0 && (
        <div className={styles.imageSlider}>
          <Image
            src={images[currentImageIndex]}
            alt={`Project Image ${currentImageIndex + 1}`}
            width={600}
            height={400}
            style={{ objectFit: "contain" }}
            className={styles.projectImage}
          />
          {images.length > 1 && (
            <>
              <button className={styles.prevButton} onClick={handlePrev}>&lt;</button>
              <button className={styles.nextButton} onClick={handleNext}>&gt;</button>
            </>
          )}
        </div>
      )}
      <h2>{title}</h2>
      <PostContent content={description} />
    </div>
  );
};

export default ProjectCard;
