import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import PostUser from "@/components/postUser/postUser";

const PostCard = ({ post }) => {
  const images = [post.img1, post.img2, post.img3, post.img4, post.img5].filter(Boolean);
  const firstImage = images.length > 0 ? images[0] : null;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {firstImage && (
          <div className={styles.imgContainer}>
            <Image src={firstImage} alt="" layout="fill" className={styles.img} />
          </div>
        )}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.metadata}>
          <span className={styles.date}>
            {post.createdAt?.toString().slice(4, 16)}
          </span>
          <PostUser userId={post.userId} />
        </div>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          Leggi di più
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
