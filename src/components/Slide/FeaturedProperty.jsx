import SlideWrap from "./index";
import Image from "../Image";

const Slide = ({ images }) => {
  const SlideItems = images.map((img, index) => (
    <div
      key={index}
      className={`keen-slider__slide number-slide${index + 1} w-full h-full`}
      style={{
        transform: "translate3d(0px, 0px, 0px)",
      }}
    >
      <Image
        src={img}
        alt={`property${index + 6}`}
        loading="lazy"
        decoding="async"
        className="rounded-2xl w-full h-72 md:h-540"
        style={{ color: "transparent" }}
      />
    </div>
  ));

  return (
    <SlideWrap
      dotCustomClass="left-2/5 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5"
      slideItems={SlideItems}
    />
  );
};

export default Slide;
