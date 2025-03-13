import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { User, Upload, Check, Loader2 } from "lucide-react";
import { fetchProfile, updateProfile, clearProfileError } from "@/redux/slices/profileSlice";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { profileData, loading, error } = useSelector((state) => state.profile);
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    profile_picture: null,
  });
  
  const [previewUrl, setPreviewUrl] = useState(null);
  const [success, setSuccess] = useState(false);
  console.log("profileData", profileData);
  console.log("formData", formData);
  
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  
  useEffect(() => {
    if (profileData) {
      setFormData({
        username: profileData.username || "",
        first_name: profileData.first_name || "",
        last_name: profileData.last_name || "",
        profile_picture: null,
      });
      
      // Set preview URL if profile picture exists
      if (profileData.profile_picture) {
        setPreviewUrl(profileData.profile_picture);
      }
    }
  }, [profileData]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        profile_picture: file,
      });
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await dispatch(updateProfile(formData));
    
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };
  
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Your Profile</h2>
          
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg mb-6">
              {typeof error === 'object' ? JSON.stringify(error) : error}
            </div>
          )}
          
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-500/20 border border-green-500/50 text-green-200 px-4 py-3 rounded-lg mb-6 flex items-center"
            >
              <Check className="mr-2 h-5 w-5" />
              Profile updated successfully!
            </motion.div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-8 flex flex-col items-center">
              <div
                className="relative w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm border-2 border-white/20 mb-4 overflow-hidden cursor-pointer"
                onClick={triggerFileInput}
              >
                {formData.profile_picture ? (
                  <img
                    src={formData.profile_picture}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <User className="w-16 h-16 text-white/50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Upload className="w-8 h-8 text-white" />
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={triggerFileInput}
                className="text-green-300 hover:text-green-200 text-sm"
              >
                Change profile picture
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="username" className="block text-green-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-green-400 focus:ring-1 focus:ring-green-400 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="first_name" className="block text-green-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-green-400 focus:ring-1 focus:ring-green-400 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="last_name" className="block text-green-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-green-400 focus:ring-1 focus:ring-green-400 text-white"
                />
              </div>
              
              {profileData && (
                <div>
                  <label className="block text-green-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={profileData.email || ""}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white cursor-not-allowed opacity-70"
                    disabled
                  />
                  <p className="text-xs text-green-200/70 mt-1">Email cannot be changed</p>
                </div>
              )}
            </div>
            
            <div className="mt-8">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={`w-full p-3 rounded-lg font-medium flex items-center justify-center transition-all ${
                  loading
                    ? "bg-green-600/50 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500"
                } text-white shadow-lg`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Save Profile"
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileForm;