import HeaderList from "../../../components/HeaderList";
import { getImageUrlGlobal } from "../../../utils/getAssets";
import Card from "../../../components/Blog/Card";

const Blog = () => {
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
    {
      id: 4,
      title: "Staging secrets revealed",
      date: "Feb 05, 2025",
      tag: "Hotspots",
      image: getImageUrlGlobal("post/blog-9.jpg"),
      href: "/blogs/9",
    },
    {
      id: 5,
      title: "Luxury homes defined",
      date: "Jan 25, 2025",
      tag: "Insights",
      image: getImageUrlGlobal("post/blog-4.jpg"),
      href: "/blogs/4",
    },
    {
      id: 6,
      title: "Smart homes future",
      date: "Jan 07, 2025",
      tag: "Insights",
      image: getImageUrlGlobal("post/blog-5.jpg"),
      href: "/blogs/5",
    },
    {
      id: 7,
      title: "Mortgage rates update",
      date: "Dec 19, 2024",
      tag: "Updates",
      image: getImageUrlGlobal("post/blog-3.jpg"),
      href: "/blogs/3",
    },
    {
      id: 8,
      title: "Top investment spots",
      date: "Dec 10, 2024",
      tag: "Hotspots",
      image: getImageUrlGlobal("post/blog-7.jpg"),
      href: "/blogs/7",
    },
    {
      id: 9,
      title: "Sell property fast",
      date: "Oct 16, 2024",
      tag: "Advice",
      image: getImageUrlGlobal("post/blog-6.jpg"),
      href: "/blogs/6",
    },
  ];

  return (
    <>
      <HeaderList
        name="Blog"
        title="Real estate insights."
        description="Stay ahead in the property market with expert advice and updates."
      />
      <section className="pt-0!">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
