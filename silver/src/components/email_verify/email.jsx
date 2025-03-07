import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Mail, ExternalLink, ArrowRight, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../authmodals/login";

const EmailVerificationPage = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (countdown > 0 && !isVerified) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, isVerified]);

  const handleResendEmail = () => {
    setIsResending(true);
    // Simulating email resend API call
    setTimeout(() => {
      setCountdown(60);
      setIsResending(false);
    }, 2000);
  };

  const handleVerificationSuccess = () => {
    setIsVerified(true);
    // Redirect after showing success message
    setTimeout(() => navigate("/dashboard"), 3000);
  };

  const emailProviders = [
    { name: "Gmail", url: "https://mail.google.com", color: "#EA4335" },
    { name: "Outlook", url: "https://outlook.live.com", color: "#0078D4" },
    { name: "Yahoo Mail", url: "https://mail.yahoo.com", color: "#6001D2" },
    { name: "ProtonMail", url: "https://mail.proton.me", color: "#6D4AFF" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 overflow-hidden"
      >
        {isVerified ? (
          <div className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Email Verified!
            </h2>
            <p className="text-green-100 mb-6">
              Thank you for verifying your email. You'll be redirected to your dashboard shortly.
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium flex items-center hover:from-green-400 hover:to-green-500 transition-all shadow-lg"
              >
                Go to Dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </div>
        ) : (
          <>
            <div className="p-8">
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center"
                >
                  <Mail className="w-10 h-10 text-white" />
                </motion.div>
              </div>
              <h2 className="text-3xl font-bold text-white text-center mb-2">
                Check Your Email
              </h2>
              <p className="text-green-100 text-center mb-8">
                We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.
              </p>

              <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
                <h3 className="text-xl font-medium text-white mb-4">
                  Open your email provider
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {emailProviders.map((provider) => (
                    <a
                      key={provider.name}
                      href={provider.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/10"
                      >
                        <span
                          className="font-medium text-white"
                          style={{ color: provider.color }}
                        >
                          {provider.name}
                        </span>
                        <ExternalLink className="w-4 h-4 text-white/70" />
                      </motion.div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-green-100 mb-4">
                  Didn't receive an email? Check your spam folder or request a new verification link.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleResendEmail}
                  disabled={countdown > 0 || isResending}
                  className={`px-6 py-3 rounded-full font-medium flex items-center justify-center mx-auto transition-all ${
                    countdown > 0 || isResending
                      ? "bg-white/20 text-white/50 cursor-not-allowed"
                      : "bg-white text-green-600 hover:bg-green-50"
                  }`}
                >
                  {isResending ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Resending...
                    </>
                  ) : countdown > 0 ? (
                    <>
                      Resend Email ({countdown}s)
                    </>
                  ) : (
                    <>
                      Resend Verification Email
                      <RefreshCw className="ml-2 w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            <div className="bg-white/5 p-4 border-t border-white/10">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => navigate("/")}
                  className="text-green-300 hover:text-green-200 transition-colors"
                >
                  Back to Home
                </button>
                <button
                  className="text-green-300 hover:text-green-200 transition-colors"
                >
                  <LoginModal />
                </button>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default EmailVerificationPage;