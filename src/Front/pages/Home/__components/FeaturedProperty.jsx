import { getImageUrlGlobal, getIconGlobal } from "../../../../utils/getAssets";
import Slide from "../../../../components/Slide";

const FeaturedProperty = () => {
  const property = {
    title: "Modern luxe villa",
    address: "20 S Aurora Ave, Miami",
    price: "$1,650,500",
    bedrooms: 4,
    bathrooms: 3,
    bar: 2,
    area: 560,
    parking: true,
    content:
      "Experience luxury living at modern luxe villa, located at 20 S Aurora Ave, Miami. Priced at $1,650,500, this 560 ft² smart home offers 4 bedrooms, 3 bathrooms, and spacious living areas. Enjoy energy efficiency, natural light, security systems, outdoor spaces, and 2 bar areas—perfect for 8+ guests. Built in 2025.",
    gallery: [
      getImageUrlGlobal("properties_1/image-1.jpg"),
      getImageUrlGlobal("properties_1/image-2.jpg"),
      getImageUrlGlobal("properties_1/image-3.jpg"),
      getImageUrlGlobal("properties_1/image-4.jpg"),
    ],
    link: "/properties/modern-luxe-villa",
  };
  const images = property.gallery;
  let conententDetails = property.parking ? [{ icon: "parking", text: "Parking Space" }] : [];
  conententDetails = [...conententDetails,
    { icon: "sofa", text: `${property.bedrooms} Bedrooms `},
    { icon: "tube", text: `${property.bathrooms} Bathrooms`},
    { icon: "bar", text: `${property.bar} Bar areas`},
  ];

  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="relative">
            <Slide images={images} />
          </div>
          {/* <div className="relative">
            <div
              className="relative h-full"
              role="region"
              aria-roledescription="carousel"
              data-slot="carousel"
            >
              <div
                className="overflow-hidden h-full"
                data-slot="carousel-content"
              >
                <div
                  className="inline-flex h-full w-full"
                  style={{ transform: "translate3d(0px, 0px, 0px)" }}
                >
                  {images.map((img, index) => (
                    <div
                      key={index}
                      role="group"
                      aria-roledescription="slide"
                      data-slot="carousel-item"
                      className="shrink-0 w-full h-full"
                      style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <img
                        alt={`property${index + 6}`}
                        loading="lazy"
                        width="680"
                        height="530"
                        decoding="async"
                        className="rounded-2xl w-full h-540"
                        src={img}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute left-2/5 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5">
              {[0, 1, 2, 3].map((dot, i) => (
                <button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div> */}

          <div className="flex flex-col gap-10">
            <div>
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
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
                Featured property
              </p>
              <h2 className="lg:text-52 text-40 font-medium text-dark dark:text-white">
                {property.title}
              </h2>
              <div className="flex items-center gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--ph text-dark/50 dark:text-white/50"
                  width="28"
                  height="26"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118"
                  />
                </svg>
                <p className="text-dark/50 dark:text-white/50 text-base">
                  {property.address}
                </p>
              </div>
            </div>

            <p className="text-base text-dark/50 dark:text-white/50">
              {property.content}
            </p>

            <div className="grid grid-cols-2 gap-10">
              {conententDetails.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                    <img
                      alt={item.icon}
                      loading="lazy"
                      width="24"
                      height="24"
                      decoding="async"
                      className="block dark:hidden"
                      src={getIconGlobal(`${item.icon}.svg`)}
                      style={{ color: "transparent" }}
                    />
                    <img
                      alt={item.icon}
                      loading="lazy"
                      width="24"
                      height="24"
                      decoding="async"
                      className="hidden dark:block"
                      src={getIconGlobal(`dark-${item.icon}.svg`)}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <h6>{item.text}</h6>
                </div>
              ))}
            </div>

            <div className="flex gap-10">
              <a
                className="py-4 px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white"
                href="/contactus"
              >
                Get in touch
              </a>
              <div>
                <h4 className="text-3xl text-dark dark:text-white font-medium">
                  {property.price}
                </h4>
                <p className="text-base text-dark/50">Discounted price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;
