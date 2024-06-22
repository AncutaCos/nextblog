import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import PostContent from "@/components/PostContent";
import ImageCarousel from "@/components/imageCarousel/ImageCarousel";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  const images = [post.img1, post.img2, post.img3, post.img4, post.img5].filter(Boolean);

  return (
    <div className={styles.container}>
      {images.length > 0 && <ImageCarousel images={images} />}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailValue}>
              {new Date(post.createdAt).toLocaleDateString("it-IT", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
        <PostContent content={post.desc} /> {/* Usa PostContent per renderizzare il contenuto */}
      </div>
    </div>
  );
};

export default SinglePostPage;
