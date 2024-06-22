"use server";
import { revalidatePath } from "next/cache";
import { Post, User, Book , Project} from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addBook = async (prevState,formData) => {
  const { title, author, description, image, fileUrl } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newBook = new Book({
      title,
      author,
      description,
      image,
      fileUrl,
    });

    await newBook.save();
    console.log("Book saved to database");
    revalidatePath("/library"); // Rivalidate library page after adding new book
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addProject = async (prevState,formData) => {
  const { title, description, image1, image2, image3, image4, image5, useDefaultImage } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newProject = new Project({
      title,
      description,
      image1: image1 || null,
      image2: image2 || null,
      image3: image3 || null,
      image4: image4 || null,
      image5: image5 || null,
      useDefaultImage: useDefaultImage === 'true',
    });

    await newProject.save();
    console.log("Project saved to database");
    revalidatePath("/admin");
    revalidatePath("/projects"); 
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteBook = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Book.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/library");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const deleteProject = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Project.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/projects");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, img1, img2, img3, img4, img5 } = Object.fromEntries(formData);

  try {
    await connectToDb();

    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img1,
      img2,
      img3,
      img4,
      img5,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img, isAdmin } = Object.fromEntries(formData);

  try {
    connectToDb();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin, // Imposta isAdmin su true
    });

    await newUser.save();
    console.log("User saved to db");
    revalidatePath("/admin");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("User saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};


export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};