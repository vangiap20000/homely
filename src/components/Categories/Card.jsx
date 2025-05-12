import { Link } from "react-router-dom";

const Card = ({ item, index }) => {
  return (
    <div
      key={index}
      className={`${index < 2 ? "lg:col-span-6" : "lg:col-span-3"} col-span-12 sm:col-span-6`}
    >
      <div className="relative rounded-2xl overflow-hidden group">
        <Link to={item.href}>
          <img
            alt="property"
            loading="lazy"
            width="680"
            height="386"
            decoding="async"
            className="w-full"
            src={item.img}
            style={{ color: "transparent" }}
          />
        </Link>
        <Link
          to={item.href}
          className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
        >
          <div className="flex justify-end mt-6 mr-6">
            <div className="bg-white text-dark rounded-full w-fit p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="24"
                className="iconify iconify--ph"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="text-white text-2xl">{item.title}</h3>
            <p className="text-white/80 text-base leading-6">{item.desc}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;