import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loader from "../components/ui/Loader";
import { FaUserCircle, FaPhoneAlt, FaBirthdayCake, FaEnvelope } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const firebaseUser = auth.currentUser;

    if (firebaseUser) {
      const localUser = JSON.parse(localStorage.getItem("user"));

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

  if (!user) return <Loader />;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-100 via-purple-50 to-white p-4">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Profile Header */}
        <div className="bg-purple-600 p-6 flex flex-col items-center text-white">
          <FaUserCircle className="text-7xl mb-4" />
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-purple-200 mt-1">{user.email}</p>
        </div>

        {/* Profile Info */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-purple-600 w-5 h-5" />
            <span className="text-gray-700 font-medium">{user.mobile || "Not provided"}</span>
          </div>
          <div className="flex items-center gap-4">
            <FaBirthdayCake className="text-purple-600 w-5 h-5" />
            <span className="text-gray-700 font-medium">{user.dob || "Not provided"}</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-purple-600 w-5 h-5" />
            <span className="text-gray-700 font-medium">{user.email}</span>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-semibold transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
