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

    console.log("User added!");
    return { success: true };
  } catch (err) {
    console.error("Error adding user:", err);
    return { success: false, error: err };
  }
};
