import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";

export const addUser = async (user) => {
  const { email } = user;

  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      console.error("User with this email already exists.");
      toast.error("User with this email already exists.");
      return { success: false, message: "Email already exists" };
    }

    // Add new user
    await addDoc(collection(db, "users"), {
      ...user,
      createdAt: new Date(),
    });
    toast.success("User added successfully");
    console.log("User added!");
    return { success: true };
  } catch (err) {
    console.error("Error adding user:", err);
    return { success: false, error: err };
  }
};




export const loginUser = async (email, password) => {
  try {
    // Query users collection for the email
    const q = query(collection(db, "users"), where("email", "==", email));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      toast.error("User not found");
      return { success: false, message: "User not found" };
    }

    // Get the user data (Firestore can have multiple, take first)
    const userDoc = snapshot.docs[0];
    const userData = userDoc.data();

    // Check password
    if (userData.password !== password) {
      toast.error("Incorrect password");
      return { success: false, message: "Incorrect password" };
    }

    toast.success("Login successful");
    return { success: true, user: userData };
  } catch (err) {
    console.error("Error logging in:", err);
    toast.error("Login failed");
    return { success: false, error: err };
  }
};
