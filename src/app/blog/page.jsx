import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {
  const posts = await getPosts();

  // Ordina i post per data di creazione, dal più recente al più vecchio
  const sortedPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <div className={styles.menu}>
        {/* Assicurati di inserire qui il contenuto del menu */}
      </div>
      <div className={styles.container}>
        {sortedPosts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
