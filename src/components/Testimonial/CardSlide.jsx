import Image from "../Image";

const CardSlide = ({ testimonial, index }) => {
  return (
    <div
      className={`keen-slider__slide number-slide${index + 1} w-full h-full mt-9`}
    >
      <div className="lg:flex items-center gap-11">
        <div className="flex items-start gap-11 lg:pr-20">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="text-primary"
              width="32"
              height="32"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="m219.31 108.68l-80-80a16 16 0 0 0-22.62 0l-80 80A15.87 15.87 0 0 0 32 120v96a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-96a15.87 15.87 0 0 0-4.69-11.32M208 208H48v-88l80-80l80 80Z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-white lg:text-3xl sm:text-2xl text-xl">
              {testimonial.content}
            </h4>
            <div className="flex items-center mt-8 gap-6">
              <Image
                alt={testimonial.user.name}
                loading="lazy"
                width="80"
                height="80"
                className="rounded-full lg:hidden block"
                style={{ color: "transparent" }}
                src={testimonial.user.image}
              />
              <div>
                <h6 className="text-white text-xm font-medium">
                  {testimonial.user.name}
                </h6>
                <p className="text-white/40">{testimonial.user.role}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <Image
            alt={testimonial.user.name}
            loading="lazy"
            width="440"
            height="440"
            className="lg:block hidden"
            style={{ color: "transparent" }}
            src={testimonial.user.image}
          />
          <Image />
        </div>
      </div>
    </div>
  );
};

export default CardSlide;
