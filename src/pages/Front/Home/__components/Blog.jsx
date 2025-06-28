import { Link } from "react-router-dom";
import { getImageUrlGlobal } from "../../../../utils/getAssets";
import Card from "../../../../components/Blog/Card";

const posts = [
  {
    id: 1,
    title: "Apartment or house?",
    date: "Feb 13, 2025",
    tag: "Options",
    image: getImageUrlGlobal("post/blog-8.jpg"),
    href: "/blogs/8",
  },
  {
    id: 2,
    title: "Boost home value",
    date: "Feb 09, 2025",
    tag: "Guides",
    image: getImageUrlGlobal("post/blog-2.jpg"),
    href: "/blogs/2",
  },
  {
    id: 3,
    title: "Home buying tips",
    date: "Feb 05, 2025",
    tag: "Tip",
    image: getImageUrlGlobal("post/blog-1.jpg"),
    href: "/blogs/1",
  },
];

const Blog = () => {

  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="flex justify-between md:items-end items-start mb-10 md:flex-row flex-col">
          <div>
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--ph text-2xl text-primary"
                aria-label="Home icon"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M224 120v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-96a15.87 15.87 0 0 1 4.69-11.32l80-80a16 16 0 0 1 22.62 0l80 80A15.87 15.87 0 0 1 224 120"
                ></path>
              </svg>
              Blog
            </p>
            <h2 className="lg:text-52 text-40 font-medium dark:text-white">
              Real estate insights
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-xm">
              Stay ahead in the property market with expert advice and updates
            </p>
          </div>
          <Link
            to="/blogs"
            className="bg-dark dark:bg-white text-white dark:text-dark py-4 px-8 rounded-full hover:bg-primary duration-300"
          >
            Read all articles
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
