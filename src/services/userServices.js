import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

// src/services/userServices.js

import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc } from "firebase/firestore";

export const addUser = async (user) => {
  const { email, password, ...rest } = user;

  try {
    // Check if email already exists in Firestore (optional, Firebase Auth already prevents duplicates)
    const q = doc(db, "users", email);
    const snapshot = await getDoc(q);
    if (snapshot.exists()) {
      return { success: false, error: { message: "Email already exists" } };
    }

    // Create Firebase Auth user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid;

    // Save user data in Firestore with UID as document ID
    await setDoc(doc(db, "users", uid), {
      ...rest,
      email,
      createdAt: new Date(),
    });

    return { success: true };
  } catch (err) {
    console.error("Error adding user:", err);
    return { success: false, error: err };
  }
};

export const loginWithFirebase = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Fetch additional user data from Firestore if needed
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.data();
    toast.success("Login successful!");
    return { success: true, user: { uid: user.uid, ...userData } };
  } catch (err) {
    console.error("Login failed:", err);
    toast.error("Login failed: " + err.message);
    return { success: false, error: err };
  }
};
