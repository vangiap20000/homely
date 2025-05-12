import { getImageUrlGlobal } from "../../../../utils/getAssets";
import Card from "../../../../components/Properties/Crad";


const Properties = () => {
  const properties = [
    {
      title: 'Serenity height villas',
      address: '15 s aurora ave, miami',
      price: '$570,000',
      bedrooms: 4,
      bathrooms: 3,
      area: 3500,
      image: getImageUrlGlobal("properties/property1.jpg"),
      link: '/properties/serenity-height-villas',
    },
    {
      title: 'Mountain Retreat',
      address: '27 mountain road, colorado',
      price: '$850,000',
      bedrooms: 5,
      bathrooms: 4,
      area: 4000,
      image: getImageUrlGlobal("properties/property2.jpg"),
      link: '/properties/mountain-retreat',
    },
    {
      title: 'Modern Luxe',
      address: '200 sunny ave, california',
      price: '$950,000',
      bedrooms: 6,
      bathrooms: 5,
      area: 4500,
      image: getImageUrlGlobal("properties/property3.jpg"),
      link: '/properties/modern-luxe',
    },
    {
      title: 'Royal orchid villas',
      address: '12 emerald heights, los angeles',
      price: '$590,000',
      bedrooms: 6,
      bathrooms: 3,
      area: '200m²',
      image: getImageUrlGlobal("properties/property4.jpg"),
      link: '/properties/royal-orchid-villas',
    },
    {
      title: 'Grand vista villas',
      address: '25 skyline boulevard, san diego',
      price: '$710,000',
      bedrooms: 2,
      bathrooms: 1,
      area: '90m²',
      image: getImageUrlGlobal("properties/property5.jpg"),
      link: '/properties/grand-cista-villas',
    },
    {
      title: 'Imperial pearl villas',
      address: '18 Sapphire Bay Road, Naples',
      price: '$630,000',
      bedrooms: 4,
      bathrooms: 2,
      area: '130m²',
      image: getImageUrlGlobal("properties/property6.jpg"),
      link: '/properties/imperial-pearn-villas',
    },
  ]

  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="mb-16 flex flex-col gap-3">
          <div className="flex gap-2.5 items-center justify-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--ph text-primary"
                width="20"
                height="20"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M224 120v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-96a15.87 15.87 0 0 1 4.69-11.32l80-80a16 16 0 0 1 22.62 0l80 80A15.87 15.87 0 0 1 224 120"
                ></path>
              </svg>
            </span>
            <p className="text-base font-semibold text-dark/75 dark:text-white/75">
              Properties
            </p>
          </div>
          <h2 className="text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2">
            Discover inspiring designed homes.
          </h2>
          <p className="text-xm font-normal text-black/50 dark:text-white/50 text-center">
            Curated homes where elegance, style, and comfort unite.
          </p>
        </div>

        {/* Repeat this block for each property card */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* Property Card Component could be used here */}
          {properties.map((item, index) => <Card key={index} property={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Properties;
