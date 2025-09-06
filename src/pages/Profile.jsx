import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Get Firebase user
    const firebaseUser = auth.currentUser;

    if (firebaseUser) {
      // Get localUser from localStorage
      const localUser = JSON.parse(localStorage.getItem("user"));

      // Convert Firestore timestamp to readable date
      const dob = localUser?.date
        ? new Date(localUser.date.seconds * 1000).toLocaleDateString()
        : "";

      setUser({
        name: localUser?.name || firebaseUser.displayName,
        email: firebaseUser.email,
        mobile: localUser?.phone || "",
        dob: dob,
      });
    } else {
      // Not logged in → redirect
      navigate("/login");
    }
  }, [auth, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!user) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">User Profile</h2>

        {/* User details */}
        <div className="space-y-4">
          <div>
            <p className="text-gray-500 text-sm">Name</p>
            <p className="font-medium">{user.name}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Mobile</p>
            <p className="font-medium">{user.mobile}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Date of Birth</p>
            <p className="font-medium">{user.dob}</p>
          </div>
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="w-full mt-6 bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
