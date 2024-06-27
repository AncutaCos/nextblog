"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { handleLogout } from "@/lib/action";
import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";

const Links = ({ session }) => {
  const { locale, switchLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const links = [
    {
      title: <FontAwesomeIcon icon={faHome} />,
      path: "/",
    },
    {
      title: <span>{locale === 'ro' ? 'Istoric' : 'Storia'}</span>,
      path: "/about",
    },
    {
      title: <span>{locale === 'ro' ? 'Blog' : 'Blog'}</span>,
      path: "/blog",
    },
    {
      title: <span>{locale === 'ro' ? 'Bibliotecă' : 'Biblioteca'}</span>,
      path: "/library",
    },
    {
      title: <span>{locale === 'ro' ? 'Proiecte' : 'Progetti'}</span>,
      path: "/projects",
    },
    {
      title: <span>{locale === 'ro' ? 'Contact' : 'Contatto'}</span>,
      path: "/contact",
    },
  ];

  const handleDoubleClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoContent}>
          <div className={styles.logoImg} onDoubleClick={handleDoubleClick}>
            <Image 
              src={locale === 'ro' ? "/LogoRo.jpg" : "/LogoIt.jpg"} 
              alt="logo" 
              width={100} 
              height={100} 
            />
          </div>
          <div className={styles.logoText}>
            <h1>{locale === 'ro' ? 'Parohia Ortodoxă ' : 'Chiesa Ortodossa'}</h1>
            <h2>{locale === 'ro' ? 'Sfânta Mare Muceniță Anastasia Romana' : 'Santa Grande Martire Anastasia Romana'}</h2>
            <h3>Prato</h3>
          </div>
        </div>
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.path} />
        ))}
        {session?.user ? (
          <>
            {session.user.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}><FontAwesomeIcon icon={faLock} /></button>
            </form>
          </>
        ) : (
          <NavLink
            item={{ title: <FontAwesomeIcon icon={faUser} />, path: "/login" }}
            className={`${styles.linkButton} ${styles.loginButton}`}
          />
        )}
        <button className={styles.languageButton} onClick={switchLanguage}>
          {locale === 'ro' ? (
            <Image src="/Steag-Italia.jpg" alt="Italiano" width={30} height={20} />
          ) : (
            <Image src="/steagul-Romaniei.png" alt="Română" width={30} height={20} />
          )}
        </button>
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.path} />
          ))}
          <button className={styles.languageButton} onClick={switchLanguage}>
            {locale === 'ro' ? (
              <Image src="/Steag-Italia.jpg" alt="Italiano" width={30} height={20} />
            ) : (
              <Image src="/steagul-Romaniei.png" alt="Română" width={30} height={20} />
            )}
          </button>
        </div>
      )}

      {modalOpen && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.closeButton} onClick={handleCloseModal}>&times;</span>
            <Image 
              src={locale === 'ro' ? "/LogoRo.jpg" : "/LogoIt.jpg"} 
              alt="logo" 
              width={500} 
              height={500} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
