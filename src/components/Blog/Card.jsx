import { Link } from "react-router-dom";
import Image from "../Image";

const Card = ({ post }) => {
  return (
    <div className="w-full">
      <Link
        className="gap-4 group"
        to={post.href}
        aria-label={`blog cover ${post.title}`}
      >
        <div className="overflow-hidden rounded-2xl flex-shrink-0">
          <Image
            alt={post.title}
            loading="lazy"
            width="190"
            height="163"
            decoding="async"
            className="transition group-hover:scale-110"
            style={{ color: "transparent", width: "100%", height: "100%" }}
            src={post.image}
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="mt-2 text-xl font-medium text-dark dark:text-white group-hover:text-primary">
              {post.title}
            </h3>
            <span className="text-base font-medium dark:text-white/50 text-dark/50 leading-loose">
              {post.date}
            </span>
          </div>
          <div className="py-2.5 px-5 bg-dark/5 rounded-full dark:bg-white/15">
            <p className="text-sm font-semibold text-dark dark:text-white">
              {post.tag}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
