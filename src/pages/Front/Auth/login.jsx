import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Form from "./__components/Form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  
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
