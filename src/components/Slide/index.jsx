import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Slide = ({slideItems, wrapParentClass = '', dotCustomClass = ''}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  
  return (
    <div className={`relative overflow-auto ${wrapParentClass}`}>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {slideItems}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className={`absolute ${dotCustomClass}`}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full ${currentSlide === idx ? "bg-white" : "bg-white/50"}`}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  )
}

export default Slide;