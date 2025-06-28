
import { useState } from "react";
import { getImageUrlGlobal } from "../../../utils/getAssets";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log("Update profile:", formData);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log("Change password");
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      console.log("Delete account");
    }
  };

  return (
    <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-2">Account</h2>
          <p className="text-gray-600 dark:text-gray-300">Update your profile and personal details here</p>
        </div>

        {/* Profile Section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-black/10 dark:border-white/10 p-6 lg:p-8 mb-8">
          <h3 className="text-2xl font-semibold text-black dark:text-white mb-6">Profile</h3>
          
          <form onSubmit={handleUpdateProfile}>
            {/* Avatar Section */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-black dark:text-white mb-4">Avatar</h4>
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={getImageUrlGlobal("default_user.png")} 
                    alt="avatar" 
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                  />
                </div>
                <div className="flex-1">
                  <button 
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-dark transition-colors duration-300 mb-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Upload
                  </button>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    For best results, upload an image 512x512 or larger.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-black dark:text-white mb-2">
                    First name
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg outline-primary focus:outline bg-white dark:bg-gray-800 text-black dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-black dark:text-white mb-2">
                    Last name
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg outline-primary focus:outline bg-white dark:bg-gray-800 text-black dark:text-white"
                  />
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg outline-primary focus:outline bg-white dark:bg-gray-800 text-black dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black dark:text-white mb-2">
                    Phone number
                  </label>
                  <input 
                    type="text" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg outline-primary focus:outline bg-white dark:bg-gray-800 text-black dark:text-white"
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-dark transition-colors duration-300"
            >
              Update
            </button>
          </form>
        </div>

        {/* Password Section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-black/10 dark:border-white/10 p-6 lg:p-8 mb-8">
          <h3 className="text-2xl font-semibold text-black dark:text-white mb-6">Password</h3>
          
          <form onSubmit={handleChangePassword}>
            <div className="space-y-6">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Current password
                </label>
                <input 
                  type="password" 
                  name="currentPassword" 
                  id="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg outline-primary focus:outline bg-white dark:bg-gray-800 text-black dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-black dark:text-white mb-2">
                  New password
                </label>
                <input 
                  type="password" 
                  name="newPassword" 
                  id="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg outline-primary focus:outline bg-white dark:bg-gray-800 text-black dark:text-white"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Your password must have at least 8 characters, include one uppercase letter, and one number.
                </p>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Confirm password
                </label>
                <input 
                  type="password" 
                  name="confirmPassword" 
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 rounded-lg outline-primary focus:outline bg-white dark:bg-gray-800 text-black dark:text-white"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-dark transition-colors duration-300"
            >
              Change password
            </button>
          </form>
        </div>

        {/* Danger Zone */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-red-200 dark:border-red-800 p-6 lg:p-8">
          <h3 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-6">Danger zone</h3>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h4 className="text-lg font-medium text-black dark:text-white mb-1">Delete account</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Permanently remove your account. This action is not reversible.
              </p>
            </div>
            <button 
              onClick={handleDeleteAccount}
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 lg:flex-shrink-0"
            >
              Delete account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
