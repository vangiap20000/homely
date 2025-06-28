import { useForm } from "react-hook-form";
import HeaderList from "../../../components/HeaderList";
import { getImageUrlFront } from "../../../utils/getAssets";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28">
      <HeaderList
        name="Contact us"
        title="Have questions? ready to help!"
        description="Looking for your dream home or ready to sell? Our expert team offers personalized guidance and market expertise tailored to you."
        classDefault="mb-16 p-0 text-center"
      />
      <div className="border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-xl dark:shadow-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="relative w-fit">
            <img
              alt="wall"
              loading="lazy"
              width="497"
              height="535"
              decoding="async"
              data-nimg="1"
              className="rounded-2xl brightness-50 h-full"
              src={getImageUrlFront("contactUs.jpg")}
              style={{ color: "transparent" }}
            />
            <div className="absolute top-6 left-6 lg:top-12 lg:left-12 flex flex-col gap-2">
              <h5 className="text-xl xs:text-2xl mobile:text-3xl font-medium tracking-tight text-white">
                Contact information
              </h5>
              <p className="text-sm xs:text-base mobile:text-xm font-normal text-white/80">
                Ready to find your dream home or sell your property? We’re here
                to help!
              </p>
            </div>
            <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 flex flex-col gap-4 text-white">
              <a className="w-fit" href="/">
                <div className="flex items-center gap-4 group w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ph"
                    width="32"
                    height="32"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.6.6 0 0 0 0 .12l21 47l-20.67 24.74a6 6 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8 8 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208"
                    ></path>
                  </svg>
                  <p className="text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary">
                    +1 0239 0310 1122
                  </p>
                </div>
              </a>
              <a className="w-fit" href="/">
                <div className="flex items-center gap-4 group w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ph"
                    width="32"
                    height="32"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-20.57 16L128 133.15L52.57 64ZM216 192H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19z"
                    ></path>
                  </svg>
                  <p className="text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary">
                    support@gleamer.com
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--ph"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118"
                  ></path>
                </svg>
                <p className="text-sm xs:text-base mobile:text-xm font-normal">
                  Blane Street, Manchester
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1/2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-full md:w-[50%]">
                    <input
                      id="name"
                      autoComplete="name"
                      placeholder="Name*"
                      className={
                        `px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full` +
                        (errors.name ? " !border-red-500" : "")
                      }
                      type="text"
                      {...register("name", { required: true, maxLength: 255 })}
                      defaultValue=""
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs">
                        Name is required.
                      </span>
                    )}
                  </div>
                  <div className="w-full md:w-[50%]">
                    <input
                      id="mobile"
                      autoComplete="mobile"
                      placeholder="Phone number*"
                      className={
                        `px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full` +
                        (errors.mobile ? " !border-red-500" : "")
                      }
                      type="number"
                      {...register("mobile", { required: true, maxLength: 11 })}
                    />
                    {errors.mobile && (
                      <span className="text-red-500 text-xs">
                        Mobile is required.
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  <input
                    id="email"
                    autoComplete="email"
                    placeholder="Email address*"
                    className={
                      `px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full` +
                      (errors.email ? " !border-red-500" : "")
                    }
                    type="email"
                    {...register("email", {
                      required: true,
                      maxLength: 255,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <span className="text-red-500 text-xs">
                      Email is required.
                    </span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span className="text-red-500 text-xs">
                      Email is not valid.
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <textarea
                    rows="8"
                    cols="50"
                    id="message"
                    placeholder="Write here your message"
                    className={
                      `px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline w-full` +
                      (errors.message ? " !border-red-500" : "")
                    }
                    {...register("message", { required: true, maxLength: 255 })}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-xs">
                      Message is required.
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-full mobile:w-fit hover:cursor-pointer hover:bg-dark duration-300"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
