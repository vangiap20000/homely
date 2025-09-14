import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { getImageUrlGlobal } from "../../../utils/getAssets";
import Modal from "../../../components/Modal";
import { useGlobalConfirm } from "../../../contexts/ConfirmContext";
import { useSelector, useDispatch } from "react-redux";
import { auth, db } from "../../../firebase";
import {
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential
} from "firebase/auth";
import { doc, setDoc, deleteDoc, getDoc } from "firebase/firestore";
import { showToast } from "../../../store/toastSlice";
import { setUser, logout } from "../../../store/authSlice";
import { loading } from "../../../store/loadingSlice";
import { uploadFileToFirebase, deleteFileFromFirebase } from "../../../utils/uploadFile";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const [isUserPass, setIsUserPass] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: ""
    },
  });

  const {
    watch: watchChangePass,
    register: registerChanePass,
    handleSubmit: handleSubmitChangePass,
    formState: { errors: errorsChangePass },
  } = useForm();
  const [currentPassword, newPassword, confirmPassword] = watchChangePass([
    "currentPassword",
    "newPassword",
    "confirmPassword",
  ]);

  const confirm = useGlobalConfirm();
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(
    getImageUrlGlobal("default_user.png"),
  );

  useEffect(() => {
    if (user) {
      const fullName = user.displayName || "";
      const nameParts = fullName.split(" ").filter(Boolean);
      reset({
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        phone: user.phoneNumber || "",
      });
      if (user.photoURL) {
        setAvatarPreview(user.photoURL);
      }
      if (auth.currentUser && Array.isArray(auth.currentUser.providerData)) {
        setIsUserPass(
          auth.currentUser.providerData.some((provider) => provider.providerId === "password")
        );
      } else {
        setIsUserPass(false);
      }
    }
  }, [user, reset]);


  const handleUpdateProfile = async (data) => {
    const isConfirm = await confirm();
    if (!isConfirm) return;
    dispatch(loading(true));
    try {
      let dataUpdate = {
        displayName: data.firstName + " " + data.lastName,
        phoneNumber: data.phone
      };
      if (data.image && data.image.length > 0) {
        if (user.photoURL) {
          await deleteFileFromFirebase(user.photoURL);
        }
        
        const imageUrl = await uploadFileToFirebase(data.image[0], "avatars");   
        dataUpdate.photoURL = imageUrl;
      }
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, dataUpdate, { merge: true });

      dispatch(
        setUser({...dataUpdate, email: user.email, uid: user.uid, photoURL: dataUpdate.photoURL || user.photoURL})
      );
      dispatch(showToast({ message: "Profile updated successfully", type: "success" }));
    } catch (error) {
      console.error("Error updating profile:", error);
      dispatch(showToast({ message: "Update profile failed: " + error.message, type: "error" }));
    }
    dispatch(loading(false))
  };

  const handleChangePassword = async (data) => {
    const isConfirm = await confirm();
    if (!isConfirm) return;
    try {
      dispatch(loading(true))
      const credential = EmailAuthProvider.credential(user.email, data.currentPassword);
      await reauthenticateWithCredential(auth.currentUser, credential);
      await updatePassword(auth.currentUser, data.newPassword);
      dispatch(showToast({ message: "Password changed successfully", type: "success" }));
    } catch (error) {
      console.error("Error changing password:", error);
      dispatch(showToast({ message: "Change password failed: " + error.message, type: "error" }));
    }
    dispatch(loading(false))
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(loading(true))
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        await deleteDoc(userDocRef);
      }
      await auth.currentUser.delete();
      dispatch(loading(false))
      logout();
    } catch (error) {
      console.error("Error deleting account:", error);
      dispatch(showToast({ message: "Account deletion failed. You need to log in again to delete your account.", type: "error" }));
    }
    setIsModalDeleteOpen(false);
  };

  const handelFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
            Account
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Update your profile and personal details here
          </p>
        </div>

        {/* Profile Section */}
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 lg:p-8 mb-8 shadow-auth dark:shadow-dark-auth">
          <h3 className="text-2xl font-semibold text-black dark:text-white mb-6">
            Profile
          </h3>

          <form onSubmit={handleSubmit(handleUpdateProfile)}>
            {/* Avatar Section */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-black dark:text-white mb-4">
                Avatar
              </h4>
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={avatarPreview}
                    alt="avatar"
                    className="w-24 h-24 rounded-full object-cover border-1 !border-gray-200 !dark:border-gray-700"
                  />
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <button
                      type="button"
                      className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-dark transition-colors duration-300 mb-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      Upload
                    </button>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      className="absolute inset-0 w-[113.31px] h-full opacity-0 cursor-pointer"
                      {...register("image", {
                        validate: {
                          checkFileType: (files) => {
                            if (!files || files.length === 0) return true;
                            return [
                              "image/jpeg",
                              "image/png",
                              "image/webp",
                            ].includes(files[0].type)
                              ? true
                              : "Only JPG, PNG, or WEBP images allowed";
                          },
                          checkFileSize: (files) => {
                            if (!files || files.length === 0) return true;
                            return files[0].size < 2 * 1024 * 1024
                              ? true
                              : "Image must be smaller than 2MB";
                          },
                        },
                      })}
                      onChange={handelFileChange}
                    />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    For best results, upload an image 512x512 or larger.
                  </p>
                  {errors.image && (
                    <span className="text-red-500 text-xs">
                      {errors.image.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-black dark:text-white mb-2"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={
                      `w-full px-4 py-2 border border-black/10 dark:border-white/20 rounded-lg outline-primary focus:outline bg-transparent text-black dark:text-white placeholder-gray-500 dark:text-white dark:focus:border-primary dark:border-white/20` +
                      (errors.firstName ? " !border-red-500" : "")
                    }
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "First name is required",
                      },
                      maxLength: {
                        value: 255,
                        message: "First name must be less than 255 characters",
                      },
                    })}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-xs">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-black dark:text-white mb-2"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={
                      `w-full px-4 py-2 border border-black/10 dark:border-white/20 rounded-lg outline-primary focus:outline bg-transparent text-black dark:text-white placeholder-gray-500 dark:text-white dark:focus:border-primary dark:border-white/20` +
                      (errors.lastName ? " !border-red-500" : "")
                    }
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Last name is required",
                      },
                      maxLength: {
                        value: 255,
                        message: "Last name must be less than 255 characters",
                      },
                    })}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-xs">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black dark:text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-black/10 dark:border-white/20 rounded-lg outline-primary focus:outline bg-transparent text-black dark:text-white placeholder-gray-500 dark:text-white dark:focus:border-primary dark:border-white/20"
                    readOnly
                    disabled
                    value={user?.email || ""}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black dark:text-white mb-2"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className={
                      `w-full px-4 py-2 border border-black/10 dark:border-white/20 rounded-lg outline-primary focus:outline bg-transparent text-black dark:text-white placeholder-gray-500 dark:text-white dark:focus:border-primary dark:border-white/20` +
                      (errors.phone ? " !border-red-500" : "")
                    }
                    {...register("phone", {
                      pattern: {
                        value: /^(0[3|5|7|8|9])+([0-9]{8})$/,
                        message: "Invalid phone number format",
                      },
                      maxLength: {
                        value: 10,
                        message: "Phone number must be 10 digits",
                      },
                      minLength: {
                        value: 10,
                        message: "Phone number must be 10 digits",
                      },
                    })}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="cursor-pointer mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-dark transition-colors duration-300"
            >
              Update
            </button>
          </form>
        </div>

        {/* Password Section */}
        {isUserPass &&
          <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 lg:p-8 mb-8 shadow-auth dark:shadow-dark-auth">
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-6">
              Password
            </h3>

            <form onSubmit={handleSubmitChangePass(handleChangePassword)}>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="currentPassword"
                    className="block text-sm font-medium text-black dark:text-white mb-2"
                  >
                    Current password
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    id="currentPassword"
                    className={
                      `w-full px-4 py-2 border border-black/10 dark:border-white/20 rounded-lg outline-primary focus:outline bg-transparent text-black dark:text-white placeholder-gray-500 dark:text-white dark:focus:border-primary dark:border-white/20` +
                      (errorsChangePass.currentPassword ? " !border-red-500" : "")
                    }
                    {...registerChanePass("currentPassword", {
                      required: newPassword || confirmPassword ? true : false,
                    })}
                  />
                  {errorsChangePass.currentPassword && (
                    <span className="text-red-500 text-xs">
                      Please enter your current password
                    </span>
                  )}
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="newPassword"
                    className="block text-sm font-medium text-black dark:text-white mb-2"
                  >
                    New password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    className={
                      `w-full px-4 py-2 border border-black/10 dark:border-white/20 rounded-lg outline-primary focus:outline bg-transparent text-black dark:text-white placeholder-gray-500 dark:text-white dark:focus:border-primary dark:border-white/20` +
                      (errorsChangePass?.newPassword ? " !border-red-500" : "")
                    }
                    {...registerChanePass("newPassword", {
                      required:
                        currentPassword || confirmPassword
                          ? "New password is required"
                          : false,
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d).+$/,
                        message:
                          "Password must include at least one uppercase letter and one number",
                      },
                    })}
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Your password must have at least 8 characters, include one
                    uppercase letter, and one number.
                  </p>
                  {errorsChangePass.newPassword && (
                    <span className="text-red-500 text-xs">
                      {errorsChangePass.newPassword.message}
                    </span>
                  )}
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-black dark:text-white mb-2"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className={
                      `w-full px-4 py-2 border border-black/10 dark:border-white/20 rounded-lg outline-primary focus:outline bg-transparent text-black dark:text-white placeholder-gray-500 dark:text-white dark:focus:border-primary dark:border-white/20` +
                      (errorsChangePass.confirmPassword ? " !border-red-500" : "")
                    }
                    {...registerChanePass("confirmPassword", {
                      validate: (value) =>
                        value === newPassword || "Passwords do not match",
                      required:
                        currentPassword || newPassword
                          ? "Confirm password is required"
                          : false,
                    })}
                  />
                  {errorsChangePass.confirmPassword && (
                    <span className="text-red-500 text-xs">
                      {errorsChangePass.confirmPassword.message}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className={
                  `mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-dark transition-colors duration-300` +
                  (currentPassword || newPassword || confirmPassword
                    ? " cursor-pointer"
                    : " opacity-50 cursor-not-allowed")
                }
                disabled={!(currentPassword || newPassword || confirmPassword)}
              >
                Change password
              </button>
            </form>
          </div>
        }

        {/* Danger Zone */}
        <div className="rounded-2xl dark:border-red-800 p-6 lg:p-8 shadow-auth dark:shadow-dark-auth border !border-red-200">
          <h3 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-6">
            Danger zone
          </h3>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h4 className="text-lg font-medium text-black dark:text-white mb-1">
                Delete account
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Permanently remove your account. This action is not reversible.
              </p>
            </div>
            <button
              onClick={() => setIsModalDeleteOpen(true)}
              className="cursor-pointer px-6 py-3 font-semibold rounded-lg transition-colors duration-300 lg:flex-shrink-0 !bg-red-100 !text-red-600 hover:!text-white hover:!bg-red-600"
            >
              Delete account
            </button>
          </div>
        </div>
      </div>

      {/*Modal delete account */}
      <Modal
        isOpen={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
        header={
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Delete account
          </h2>
        }
        body={
          <p className="text-gray-600 dark:text-gray-300">
            Are you sure you want to delete your account? This action cannot be
            undone.
          </p>
        }
        footer={
          <div className="flex justify-center sm:justify-start gap-4 mt-5">
            <button
              onClick={() => setIsModalDeleteOpen(false)}
              className="cursor-pointer px-6 py-3 font-semibold rounded-lg transition-colors duration-300 bg-gray-300 text-gray-600 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteAccount}
              className="cursor-pointer px-6 py-3 font-semibold rounded-lg transition-colors duration-300 !bg-red-500 text-white hover:!bg-red-600"
            >
              Delete
            </button>
          </div>
        }
      />
    </div>
  );
};

export default Profile;
