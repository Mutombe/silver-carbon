import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import LoginModal from "../authmodals/login";

const VerifyEmailPage = () => {
  const { uid, token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState({
    loading: true,
    success: false,
    message: "Verifying your email...",
  });
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.post("/api/verify-email/", {
          uid,
          token,
        });

        setVerificationStatus({
          loading: false,
          success: true,
          message: "Email verification successful! You can now log in.",
        });
        
        // Automatically open the login modal after successful verification
        setTimeout(() => {
          setOpenLoginModal(true);
        }, 1500);
        
      } catch (error) {
        setVerificationStatus({
          loading: false,
          success: false,
          message: error.response?.data?.message || "Email verification failed. Please try again.",
        });
      }
    };

    verifyEmail();
  }, [uid, token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-gradient-to-r from-green-500/10 via-blue-500/10 to-green-500/10 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-green-500/20"
      >
        {verificationStatus.loading ? (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
            <h2 className="text-xl font-bold text-white mb-2">Verifying Your Email</h2>
            <p className="text-gray-300">Please wait while we verify your email address...</p>
          </div>
        ) : (
          <div className="text-center">
            {verificationStatus.success ? (
              <>
                <div className="bg-green-500/20 rounded-full p-3 inline-block mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Verification Successful</h2>
                <p className="text-gray-300 mb-6">{verificationStatus.message}</p>
                <div className="flex justify-center">
                  <LoginModal isOpen={openLoginModal} setIsOpen={setOpenLoginModal} />
                </div>
              </>
            ) : (
              <>
                <div className="bg-red-500/20 rounded-full p-3 inline-block mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Verification Failed</h2>
                <p className="text-gray-300 mb-6">{verificationStatus.message}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/")}
                  className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium hover:from-green-400 hover:to-green-500 transition-all shadow-lg"
                >
                  Back to Home
                </motion.button>
              </>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default VerifyEmailPage;