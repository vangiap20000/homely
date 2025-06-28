import { getImageUrlFront } from "../utils/getAssets";

export const categories = [
  {
    id: 1,
    slug: "/residential-homes",
    img: getImageUrlFront("villas.jpg"),
    title: "Residential Homes",
    desc: "Discover cozy and stylish residential homes tailored for families, combining comfort with modern living.",
  },
  {
    id: 2,
    slug: "/luxury-villa",
    img: getImageUrlFront("luxury-villa.jpg"),
    title: "Luxury Villas",
    desc: "Indulge in elegance with our handpicked luxury villas, crafted for those who demand exceptional living standards.",
  },
  {
    id: 3,
    slug: "/appartment",
    img: getImageUrlFront("appartment.jpg"),
    title: "Apartments",
    desc: "Explore contemporary apartments offering convenience, smart layouts, and vibrant urban lifestyle.",
  },
  {
    id: 4,
    slug: "/office-spaces",
    img: getImageUrlFront("office.jpg"),
    title: "Office Spaces",
    desc: "Elevate your business in our premium office spaces, designed to inspire productivity and professionalism.",
  },
];