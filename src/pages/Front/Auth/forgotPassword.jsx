import { useForm } from "react-hook-form";
import Form from "./__components/Form";
import { showToast } from '../../../store/toastSlice';
import { loading } from '../../../store/loadingSlice';
import { useDispatch } from 'react-redux';
import { auth } from "../../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(loading(true));
    return sendPasswordResetEmail(auth, data.email)
    .then(() => {
      dispatch(showToast({ message: 'Email sent! Please check your inbox.', type: 'success' }));
      dispatch(loading(false));
    })
    .catch((error) => {
      dispatch(showToast({ message: 'Failed to send email. ' + error.message, type: 'error' }));
      dispatch(loading(false));
    });
  };
  
  return (
    <Form isSoicalLogin={false}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 text-left">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`w-full rounded-2xl border placeholder:text-gray-400 border-black/10 dark:border-white/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary border-black/10` + (errors.email ? " !border-red-500" : "") }
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-500 text-xs">Email is required.</span>}
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center rounded-2xl border border-primary bg-primary hover:bg-transparent hover:text-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out"
          >
            Send Email
          </button>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPassword;
