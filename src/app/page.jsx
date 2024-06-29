"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "./home.module.css";
import { useLanguage } from "@/lib/LanguageContext";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import MottoContent from "@/components/MottoContent";

const Home = () => {
  const { locale } = useLanguage();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(Array(24).fill(false));
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleLinks, setVisibleLinks] = useState(Array(8).fill(false));
  const [motto, setMotto] = useState({ ro: "", it: "" });

  useEffect(() => {
    const storedMotto = localStorage.getItem("motto");
    if (storedMotto) {
      setMotto(JSON.parse(storedMotto));
    }

    const spiralOrder = getSpiralOrder(4, 6);

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % spiralOrder.length;
        setVisibleImages((prevImages) => {
          const updatedImages = [...prevImages];
          updatedImages[spiralOrder[nextIndex]] = true;
          return updatedImages;
        });
        return nextIndex;
      });
    }, 400);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setIsTitleVisible(true);
    const linkIntervals = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];

    linkIntervals.forEach((interval, index) => {
      setTimeout(() => {
        setVisibleLinks((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, interval);
    });
  }, []);

  const content = {
    ro: {
      welcome: "Bine ați venit pe pagina Parohiei",
      welcome2: "Aici puteți explora :",
      history: "Istoria Parohiei",
      blog: "Ultimele publicații si evenimente",
      projects: "Proiectele Parohiei",
      library: "Bibliotecă",
      contact: "Metode de contact",
      facebook: "Facebook",
      whatsapp: "WhatsApp",
      parishioners: "Suntem o comunitate de  + ",
      parishionersCount: "de Enoriași!",
      diocese: "Episcopia Ortodoxă Română Italia",
      orthodoxCalendar: "Calendar Ortodox",
      theofania: "Portalul Theofania",
    },
    it: {
      welcome: "Benvenuti nella pagina della Parrocchia",
      welcome2: "Qui potete trovare:",
      history: "Storia della Parrocchia",
      blog: "Ultimi articoli ed eventi",
      projects: "Progetti della Parrocchia",
      library: "Biblioteca",
      contact: "Metodi di contatto",
      facebook: "Facebook",
      whatsapp: "WhatsApp",
      parishioners: "Siamo una comunità di  + ",
      parishionersCount: " Parrocchiani!",
      diocese: "Diocesi Ortodossa Romena Italia",
      orthodoxCalendar: "Calendario Ortodosso",
      theofania: "Portale Theofania",
    },
  };

  const descriptions = [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " "
  ];

  const handleImageClick = (index) => {
    setEnlargedImage(index === enlargedImage ? null : index);
  };

  const handleCloseClick = () => {
    setEnlargedImage(null);
  };

  return (
    <>
      <Head>
        {locale === "ro" ? (
          <>
            <title>Parohia Ortodoxă Prato</title>
            <meta name="description" content="Bine ați venit pe site-ul Parohiei Ortodoxe Prato. Aflați mai multe despre biserica noastră, evenimentele și serviciile noastre." />
            <meta name="keywords" content="parohia ortodoxa Prato, biserica ortodoxa romana, ortodoxa, Prato" />
            <meta name="author" content="Parohia Ortodoxă Prato" />
            <meta property="og:title" content="Parohia Ortodoxă Prato - Biserica Ortodoxă Română" />
            <meta property="og:description" content="Bine ați venit pe site-ul Parohiei Ortodoxe Prato. Aflați mai multe despre biserica noastră, evenimentele și serviciile noastre." />
            <meta property="og:image" content="/path-to-image.jpg" />
            <meta property="og:url" content="https://www.parohiaortodoxaprato.com" />
          </>
        ) : (
          <>
            <title>Parrocchia Ortodossa Prato</title>
            <meta name="description" content="Benvenuti nel sito della Parrocchia Ortodossa Prato. Scoprite di più sulla nostra chiesa, gli eventi e i servizi." />
            <meta name="keywords" content="parrocchia ortodossa Prato, chiesa ortodossa romena, ortodossa, Prato" />
            <meta name="author" content="Parrocchia Ortodossa Prato" />
            <meta property="og:title" content="Parrocchia Ortodossa Prato - Chiesa Ortodossa Romena" />
            <meta property="og:description" content="Benvenuti nel sito della Parrocchia Ortodossa Prato. Scoprite di più sulla nostra chiesa, gli eventi e i servizi." />
            <meta property="og:image" content="/path-to-image.jpg" />
            <meta property="og:url" content="https://www.parohiaortodoxaprato.com" />
          </>
        )}
      </Head>
      <div className={styles.motto}>
        <MottoContent content={locale === "ro" ? motto.ro : motto.it} />
      </div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          {[...Array(24)].map((_, index) => (
            <div
              key={index}
              className={`${styles.heroImgWrapper} ${
                index === enlargedImage ? styles.enlarged : ""
              }`}
              style={{ zIndex: index === enlargedImage ? 20 : 0 }}
            >
              <Image
                src={`/Paroh${index + 1}.jpg`}
                alt={`Parohia Image ${index + 1}`}
                width={150}
                height={200}
                className={`${styles.heroImg} ${
                  visibleImages[index] ? styles.visible : styles.hidden
                } ${enlargedImage !== null ? styles.noHover : ""}`}
                priority
                onClick={() => handleImageClick(index)}
              />
              {index === enlargedImage && (
                <div className={styles.enlargedContent}>
                  <button
                    className={styles.closeButton}
                    onClick={handleCloseClick}
                  >
                    X
                  </button>
                  <p className={styles.imageDescription}>
                    {descriptions[index] || "Descrizione non disponibile"}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.textContainer}>
          <h3
            className={`${styles.title} ${
              isTitleVisible ? styles.visible : ""
            }`}
          >
            {content[locale].welcome}
          </h3>
          <div className={styles.counterContainer}>
            <p
              className={`${styles.desc} ${
                isTitleVisible ? styles.visible : ""
              }`}
            >
              {content[locale].welcome2}
              <br /> <br />
              <Link
                href={`/about`}
                className={`${styles.link} ${
                  visibleLinks[0] ? styles.visible : ""
                }`}
              >
                {content[locale].history}
              </Link>
              <br /> <br />
              <Link
                href={`/blog`}
                className={`${styles.link} ${
                  visibleLinks[1] ? styles.visible : ""
                }`}
              >
                {content[locale].blog}
              </Link>
              <br /> <br />
              <Link
                href={`/projects`}
                className={`${styles.link} ${
                  visibleLinks[2] ? styles.visible : ""
                }`}
              >
                {content[locale].projects}
              </Link>
              <br /> <br />
              <Link
                href={`/library`}
                className={`${styles.link} ${
                  visibleLinks[3] ? styles.visible : ""
                }`}
              >
                {content[locale].library}
              </Link>
              <br /> <br />
              <Link
                href={`/contact`}
                className={`${styles.link} ${
                  visibleLinks[4] ? styles.visible : ""
                }`}
              >
                {content[locale].contact}
              </Link>
            </p>
          </div>
          <div className={styles.socialContainer}>
            <a
              href="https://www.facebook.com/parohia.prato"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.facebook}`}
            >
              <FaFacebook className={styles.icon} />
              Facebook
            </a>
            <a
              href="https://wa.me/+393396356697"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.whatsapp}`}
            >
              <FaWhatsapp className={styles.icon} />
              WhatsApp
            </a>
          </div>
          <div className={styles.footerLinks}>
            <Link
              href="https://episcopia-italiei.it/index.php/ro/"
              className={`${styles.footerLink} ${styles.visible}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content[locale].diocese}
            </Link>
            <Link
              href="https://doxologia.ro/calendar-ortodox"
              className={`${styles.footerLink} ${styles.visible}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content[locale].orthodoxCalendar}
            </Link>
            <Link
              href="https://theofania.ro/"
              className={`${styles.footerLink} ${styles.visible}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content[locale].theofania}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
function getSpiralOrder(rows, cols) {
  const spiral = [];
  let left = 0;
  let right = cols - 1;
  let top = 0;
  let bottom = rows - 1;

  while (left <= right && top <= bottom) {
    for (let i = right; i >= left; i--) {
      spiral.push(bottom * cols + i);
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      spiral.push(i * cols + left);
    }
    left++;

    for (let i = left; i <= right; i++) {
      spiral.push(top * cols + i);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      spiral.push(i * cols + right);
    }
    right--;
  }

  return spiral;
}

export default Home;
