import React from 'react';
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from '@/redux/slices/authSlice';
import { motion } from "framer-motion";

const LogoutButton = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Logout failed:", err);
      });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleLogout}
      className="px-6 py-2 rounded-full font-semibold transition duration-300 bg-white text-green-600 border border-green-600 hover:bg-green-50 flex items-center"
    >
      <LogOut className="inline-block mr-2" size={20} />
      {loading ? "Loading..." : "Logout"}
    </motion.button>
  );
};

export default LogoutButton;