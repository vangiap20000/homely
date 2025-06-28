import HeaderList from "../../../components/HeaderList";
import { getImageUrlGlobal } from "../../../utils/getAssets";
import Card from "../../../components/Properties/Card";

const Property = ({ category }) => {
  const properties = [
    {
      id: 1,
      category_id: [1],
      title: "Serenity height villas",
      address: "15 s aurora ave, miami",
      price: "$570,000",
      bedrooms: 4,
      bathrooms: 3,
      area: 3500,
      image: getImageUrlGlobal("properties/property1.jpg"),
      link: "/properties/serenity-height-villas",
    },
    {
      id: 2,
      category_id: [],
      title: "Mountain Retreat",
      address: "27 mountain road, colorado",
      price: "$850,000",
      bedrooms: 5,
      bathrooms: 4,
      area: 4000,
      image: getImageUrlGlobal("properties/property2.jpg"),
      link: "/properties/mountain-retreat",
    },
    {
      id: 3,
      category_id: [],
      title: "Modern Luxe",
      address: "200 sunny ave, california",
      price: "$950,000",
      bedrooms: 6,
      bathrooms: 5,
      area: 4500,
      image: getImageUrlGlobal("properties/property3.jpg"),
      link: "/properties/modern-luxe",
    },
    {
      id: 4,
      category_id: [],
      title: "Royal orchid villas",
      address: "12 emerald heights, los angeles",
      price: "$590,000",
      bedrooms: 6,
      bathrooms: 3,
      area: "200",
      image: getImageUrlGlobal("properties/property4.jpg"),
      link: "/properties/royal-orchid-villas",
    },
    {
      id: 5,
      category_id: [],
      title: "Grand vista villas",
      address: "25 skyline boulevard, san diego",
      price: "$710,000",
      bedrooms: 2,
      bathrooms: 1,
      area: "90",
      image: getImageUrlGlobal("properties/property5.jpg"),
      link: "/properties/grand-cista-villas",
    },
    {
      id: 6,
      category_id: [],
      title: "Imperial pearl villas",
      address: "18 Sapphire Bay Road, Naples",
      price: "$630,000",
      bedrooms: 4,
      bathrooms: 2,
      area: "130",
      image: getImageUrlGlobal("properties/property6.jpg"),
      link: "/properties/imperial-pearn-villas",
    },
    {
      id: 7,
      category_id: [],
      title: "Opulent haven villas",
      address: "22 ocean breeze drive, malibu",
      price: "$620,000",
      bedrooms: 6,
      bathrooms: 3,
      area: "180",
      image: getImageUrlGlobal("properties/property7.jpg"),
      link: "/properties/opulent-heven-villas",
    },
    {
      id: 8,
      category_id: [],
      title: "Elite crest villas",
      address: "10 palm view lane, beverly hills",
      price: "$750,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "150",
      image: getImageUrlGlobal("properties/property8.jpg"),
      link: "/properties/elite-crest-villas",
    },
    {
      id: 9,
      category_id: [],
      title: "Majestic bay villas",
      address: "8 sunset cove, miami beach",
      price: "$680,000",
      bedrooms: 4,
      bathrooms: 2,
      area: "150",
      image: getImageUrlGlobal("properties/property9.jpg"),
      link: "/properties/majestic-bay-villas",
    },
  ];

  return (
    <>
      <HeaderList
        name="Properties"
        title={category && category.title ? category.title : "Discover inspiring designed homes."}
        description={category && category.desc ? category.desc : "Experience elegance and comfort with our exclusive luxury villas, designed for sophisticated living."}
      />
      <section className="pt-0!">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {properties.map((item, index) => (
              <Card key={index} property={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Property;
