import { getIconGlobal, getImageUrlFront } from "../../../../utils/getAssets";
import Card from "../../../../components/Categories/Card";

const Categories = () => {
  const dataCategories = [
    {
      href: "/residential-homes",
      img: getImageUrlFront("villas.jpg"),
      title: "Residential Homes",
      desc: "Experience elegance and comfort with our exclusive luxury villas, designed for sophisticatedliving.",
    },
    {
      href: "/luxury-villa",
      img: getImageUrlFront("luxury-villa.jpg"),
      title: "Luxury villas",
      desc: "Experience elegance and comfort with our exclusive luxury villas, designed for sophisticatedliving.",
    },
    {
      href: "/appartment",
      img: getImageUrlFront("appartment.jpg"),
      title: "Appartment",
      desc: "Experience elegance and comfort with our exclusive luxury villas, designed for sophisticatedliving.",
    },
    {
      href: "/office-spaces",
      img: getImageUrlFront("office.jpg"),
      title: "Office Spaces",
      desc: "Experience elegance and comfort with our exclusive luxury villas, designed for sophisticatedliving.",
    },
  ];
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0">
        <img
          alt="vector"
          loading="lazy"
          width="800"
          height="1050"
          decoding="async"
          className="dark:hidden"
          src={getIconGlobal("Vector.svg")}
          style={{ color: "transparent" }}
        />
        <img
          alt="vector"
          loading="lazy"
          width="800"
          height="1050"
          decoding="async"
          className="hidden dark:block"
          src={getIconGlobal("Vector-dark.svg")}
          style={{ color: "transparent" }}
        />
      </div>

      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-10">
          <div className="lg:col-span-6 col-span-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="iconify iconify--ph text-2xl text-primary"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M224 120v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-96a15.87 15.87 0 0 1 4.69-11.32l80-80a16 16 0 0 1 22.62 0l80 80A15.87 15.87 0 0 1 224 120"
                />
              </svg>
              Categories
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-medium leading-[1.2] text-dark dark:text-white">
              Explore best properties with expert services.
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg lg:max-w-full leading-[1.3] md:max-w-3/4">
              Discover a diverse range of premium properties, from luxurious
              apartments to spacious villas, tailored to your needs
            </p>
            <a
              className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300"
              href="/properties"
            >
              View properties
            </a>
          </div>

          {/* Property cards */}
          {dataCategories.map((item, index) => <Card key={index} item={item} index={index} />)}
        </div>
      </div>
    </section>
  );
};

export default Categories;
