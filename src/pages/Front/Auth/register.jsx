import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Form from "./__components/Form";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from '../../../store/authSlice';
import { showToast } from '../../../store/toastSlice';
import { loading } from "../../../store/loadingSlice";
import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);
  const onSubmit = async (data) => {
    dispatch(loading(true));
    const result = await dispatch(registerUser({ email: data.email, password: data.password }));
    if (registerUser.fulfilled.match(result)) {
      const userRegister = result.payload;
      await dispatch(loginUser({ email: data.email, password: data.password }));
      const userRef = doc(db, "users", userRegister.uid);
      await setDoc(userRef, {
        uid: userRegister.uid,
        email: userRegister.email,
        createdAt: new Date()
      });
      dispatch(loading(false));
      navigate('/profile');
      dispatch(showToast({ message: 'Registration successful!', type: 'success' }));
    }
    dispatch(loading(false));
  }
  useEffect(() => {
    if (error) {
      dispatch(showToast({ message: 'Registration failed, please try again.', type: 'error' }));
    }
  }, [error, dispatch]);
  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && <p className="text-red-500 text-sm mb-4">
          {error == "Firebase: Error (auth/email-already-in-use)." ? "Email already in use" : "Signup fail please try again"}
        </p>}
        {/* <div className="mb-[22px]">
          <input
            type="text"
            name="firstName"
            placeholder="firstName"
            className={
              `w-full rounded-2xl border placeholder:text-gray-400 border-black/10 dark:border-white/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary border-stroke` +
              (errors.firstName ? " !border-red-500" : "")
            }
            {...register("firstName", { required: true, maxLength: 255 })}
          />
          {errors.firstName && (
            <span className="text-red-500 text-xs">Name is required.</span>
          )}
        </div> */}

        <div className="mb-[22px]">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={
              `w-full rounded-2xl border placeholder:text-gray-400 border-black/10 dark:border-white/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary border-stroke` +
              (errors.email ? " !border-red-500" : "")
            }
            {...register("email", {
              required: true,
              maxLength: 255,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className="text-red-500 text-xs">Email is required.</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="text-red-500 text-xs">Email is not valid.</span>
          )}
        </div>

        <div className="mb-[22px]">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={
              `w-full rounded-2xl border placeholder:text-gray-400 border-black/10 dark:border-white/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary border-stroke` +
              (errors.password ? " !border-red-500" : "")
            }
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && errors.password.type === "required" && (
            <span className="text-red-500 text-xs">Password is required.</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span className="text-red-500 text-xs">
              Password must be at least 8 characters.
            </span>
          )}
        </div>

        <div className="mb-9">
          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center rounded-2xl border border-primary bg-primary hover:bg-transparent hover:text-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </div>
      </form>
      <p className="text-center mb-4 text-base">
        By creating an account you agree with our{" "}
        <Link className="text-primary hover:underline" to="/privacy-policy">
          Privacy
        </Link>{" "}
        and{" "}
        <Link className="text-primary hover:underline" to="/privacy-policy">
          Policy
        </Link>
      </p>
      <p className="text-center text-base">
        Already have an account?
        <Link
          className="pl-2 text-primary hover:bg-darkprimary hover:underline"
          to="/login"
        >
          Sign In
        </Link>
      </p>
    </Form>
  );
};

export default Register;
