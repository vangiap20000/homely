import React, { useState } from "react";
import Modal from "../../../components/Modal/modal";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function setOpenModal() {
    setIsModalOpen(true);
  }

  function setCloseModal() {
    console.log("vao");
    setIsModalOpen(false);
  }

  return (
    <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28">
      <div>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold">Account</h2>
          <p className="text-lg text-gray-500">
            Update your profile and personal details here
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Profile</h3>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Avatar</h3>
              <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src=""
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  <span className="icon-upload"></span>
                  <span>Upload</span>
                </button>
                <div className="text-sm text-gray-500 mt-2">
                  For best results, upload an image 512x512 or larger.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="first_name"
                  className="text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="last_name"
                  className="text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
            Update
          </button>
        </div>
        <hr className="my-8" />
        <div>
          <h3 className="text-2xl font-semibold">Password</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="current_password"
                className="text-sm font-medium text-gray-700"
              >
                Current password
              </label>
              <input
                type="password"
                name="current_password"
                id="current_password"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="new_password"
                className="text-sm font-medium text-gray-700"
              >
                New password
              </label>
              <input
                type="password"
                name="new_password"
                id="new_password"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-sm text-gray-500 mt-2">
                Your password must have at least 8 characters, include one
                uppercase letter, and one number.
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password_confirm"
                className="text-sm font-medium text-gray-700"
              >
                Confirm new password
              </label>
              <input
                type="password"
                name="password_confirm"
                id="password_confirm"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
            Change password
          </button>
        </div>
        <hr className="my-8" />
        <div>
          <h3 className="text-2xl font-semibold">Danger zone</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-semibold text-red-600">
                  Delete account
                </div>
                <div className="text-sm text-gray-500">
                  Permanently remove your account. This action is not
                  reversible.
                </div>
              </div>
              <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700">
                Delete account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
