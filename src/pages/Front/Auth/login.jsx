import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Form from "./__components/Form";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../store/authSlice';
import { showToast } from '../../../store/toastSlice';
import { loading } from '../../../store/loadingSlice';
import { useEffect } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const onSubmit = async (data) => {
    dispatch(loading(true))
    const result = await dispatch(loginUser({ email: data.email, password: data.password }));
    if (loginUser.fulfilled.match(result)) {
      dispatch(showToast({ message: 'Login successful!', type: 'success' }));
      navigate('/profile');
    }
    dispatch(loading(false))
  };

  useEffect(() => {
    if (error) {
      dispatch(showToast({ message: 'Login Faild', type: 'error' }));
    }
  }, [error, dispatch]);
  
  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email"
            className={`w-full rounded-2xl border placeholder:text-gray-400 border-black/10 dark:border-white/20 bg-transparent px-5 py-3 text-base text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary` + (errors.email ? " !border-red-500" : "") }
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-500 text-xs">Email is required.</span>}
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Password"
            className={`w-full rounded-2xl border border-black/10 dark:border-white/20 bg-transparent px-5 py-3 text-base text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary` + (errors.password ? " !border-red-500" : "") }
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-500 text-xs">Password is required.</span>}
        </div>
        <div className="mb-9">
          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center rounded-2xl border border-primary bg-primary hover:bg-transparent hover:text-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="text-center">
        <Link
          className="mb-2 text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
          to="/forgot-password"
        >
          Forget Password?
        </Link>
      </div>

      <p className="text-body-secondary text-base text-center">
        Not a member yet?
        <Link className="text-primary hover:underline" to="/signup">
          Sign Up
        </Link>
      </p>
    </Form>
  );
};

export default Login;
