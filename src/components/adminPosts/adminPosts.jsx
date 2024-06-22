import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Postări Blog</h1>
      <ol className={styles.postsList}>
        {posts.map((post, index) => (
          <li className={styles.postItem} key={post.id}>
            <div className={styles.detail}>
              <Image
                src={post.img || "/noAvatar.png"}
                alt=""
                width={50}
                height={50}
              />
              <span className={styles.postTitle}>{post.title}</span>
            </div>
            <form action={deletePost}>
              <input type="hidden" name="id" value={post.id} />
              <button className={styles.postButton}>Șterge postarea</button>
            </form>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AdminPosts;
