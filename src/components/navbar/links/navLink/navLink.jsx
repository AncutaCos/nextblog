"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item, className }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.linkButton} ${pathName === item.path ? styles.active : ''} ${className}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
