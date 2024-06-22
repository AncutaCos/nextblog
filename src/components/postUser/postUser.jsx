import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);

  if (!user) {
    return (
      <div className={styles.container}>
        <Image
          className={styles.avatar}
          src="/noavatar.png"
          alt=""
          width={30}
          height={30}
        />
        <div className={styles.texts}>
          <span className={styles.username}>Unknown</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={30}
        height={30}
      />
      <div className={styles.texts}>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
