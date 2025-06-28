import { getIconGlobal, getImageUrlGlobal } from "../../../../utils/getAssets";
import CardSlide from "../../../../components/Testimonial/CardSlide";
import Slide from "../../../../components/Slide";

const testimonials = [
  {
    id: 1,
    user: {
      name: "Emily & John Smith",
      role: "Buyer",
      image: getImageUrlGlobal("testimonial/smiths.jpg"),
    },
    content: "I found my ideal home in no time! The listings were detailed, the photos were accurate, and the whole process felt seamless. Customer service was top-notch, answering all my questions. I will definitely use this platform again in the future!",
  },
  {
    id: 2,
    user: {
      name: "Sam & Mickay John",
      role: "Buyer",
      image: getImageUrlGlobal("testimonial/johns.jpg"),
    },
    content: "I quickly found my dream home! The listings were thorough, the photos were spot-on, and the entire process was smooth. The customer service was outstanding, addressing all my questions with ease. I’ll definitely use this platform again!",
  },
];

const TestimonialSlides = () => (
  testimonials.map((item, index) => (
    <CardSlide key={item.id} testimonial={item} index={index} />
  ))
)

const Testimonial = () => {
  return (
    <section className="bg-dark relative overflow-hidden" id="testimonial">
      <div className="absolute right-0">
        <img
          alt="victor"
          loading="lazy"
          width="700"
          height="1039"
          decoding="async"
          style={{ color: "transparent" }}
          src={getIconGlobal("testimonial_vector.png")}
        />
      </div>

      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div>
          <p className="text-white text-base font-semibold flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="text-2xl text-primary"
              viewBox="0 0 256 256"
              width="1em"
              height="1em"
            >
              <path
                fill="currentColor"
                d="M224 120v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-96a15.87 15.87 0 0 1 4.69-11.32l80-80a16 16 0 0 1 22.62 0l80 80A15.87 15.87 0 0 1 224 120"
              />
            </svg>
            Testimonials
          </p>
          <h2 className="lg:text-52 text-40 font-medium text-white">
            What our clients say
          </h2>
        </div>
        <Slide 
          slideItems={<TestimonialSlides />} 
          wrapParentClass="h-full" 
          dotCustomClass="bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2.5 p-2.5 bg-white/20 rounded-full"
        />
      </div>
    </section>
  );
};

export default Testimonial;
