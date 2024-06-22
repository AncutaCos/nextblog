import { Post, User, Book , Project} from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
export const getBooks = async () => {
  try {
    await connectToDb();
    const books = await Book.find().exec();
    return books;
  } catch (err) {
    console.error("Error fetching books:", err);
    throw new Error("Failed to fetch books!");
  }
};
export const getBook = async (slug) => {
  try {
    connectToDb();
    const book = await Book.findOne({ slug });
    return book;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch books!");
  }
};
export const getProjects = async () => {
  try {
    await connectToDb();
    const projects = await Project.find().sort({ createdAt: -1 }).exec(); // Ordina per data di creazione decrescente
    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    throw new Error("Failed to fetch projects!");
  }
};


