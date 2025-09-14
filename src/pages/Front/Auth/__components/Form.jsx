import { getImageUrlFront, getIconGlobal } from "../../../../utils/getAssets";
import { useDispatch, useSelector } from 'react-redux';
import { googleLogin } from '../../../../store/authSlice';
import { loading } from "../../../../store/loadingSlice";
import { useNavigate } from 'react-router-dom';
import { doc, collection, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

const Form = ({ children, isSoicalLogin = true }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    dispatch(loading(true));
    const result = await dispatch(googleLogin());
    if (googleLogin.fulfilled.match(result)) {
      const user = result.payload;
      const ref = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(ref);
      if (!userDocSnap.exists()) {
        const usersCol = collection(db, "users");
        const userRef = doc(usersCol, user.uid);
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber || null,
          createdAt: new Date()
        });
      }
      navigate('/profile');
    }
    dispatch(loading(false));
  };

  return (
    <section className="pt-44">
      <div className="p-16 container mx-auto max-w-540 py-5 rounded-2xl shadow-auth dark:shadow-dark-auth">
        <div className="mb-10 text-center flex justify-center">
          <img
            alt="logo"
            loading="lazy"
            width="150"
            height="68"
            decoding="async"
            className="dark:hidden"
            src={getImageUrlFront("dark-logo.svg")}
            style={{ color: "transparent" }}
          />
          <img
            alt="logo"
            loading="lazy"
            width="150"
            height="68"
            decoding="async"
            className="dark:block hidden"
            src={getImageUrlFront("logo.svg")}
            style={{ color: "transparent" }}
          />
        </div>
        {isSoicalLogin && (
          <>
            <div className="flex gap-4">
              <button
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-black/10 dark:border-white/20 p-3.5 text-dark duration-200 ease-in dark:text-white dark:hover:bg-primary/10 hover:bg-primary/10 cursor-pointer">
                Sign In
                <img src={getIconGlobal("google.svg")} alt="google" />
              </button>

              <button
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-black/10 dark:border-white/20 p-3.5 text-dark duration-200 ease-in dark:text-white dark:hover:bg-primary/10 hover:bg-primary/10 cursor-pointer">
                Sign In
                <img src={getIconGlobal("github.svg")} alt="github" />
              </button>
            </div>
            <span className="z-1 relative my-8 block text-center">
              <span className="-z-1 absolute left-0 top-1/2 block h-px w-full bg-black/10 dark:bg-white/20"></span>
              <span className="text-body-secondary relative z-10 inline-block bg-white px-3 text-base dark:bg-black">
                OR
              </span>
            </span>{" "}
            { }
          </>
        )}
        {children}
      </div>
    </section>
  );
};

export default Form;
