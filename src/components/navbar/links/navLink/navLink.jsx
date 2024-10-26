"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item, className, closeMenu }) => {
  const pathName = usePathname();

  const handleClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <Link
      href={item.path}
      className={`${styles.linkButton} ${pathName === item.path ? styles.active : ''} ${className}`}
      onClick={handleClick}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
