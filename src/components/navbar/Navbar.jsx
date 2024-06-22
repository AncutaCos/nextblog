import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";
import Links from "./links/Links";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Links session={session} />
    </div>
  );
};

export default Navbar;
