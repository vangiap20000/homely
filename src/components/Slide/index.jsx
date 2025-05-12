import 'flowbite/dist/flowbite.css';
import { Carousel } from "flowbite-react";
import "./index.css";

const Slide = ({ images }) => {
  return (
    <div id="animation-carousel" className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className="hidden duration-200 ease-linear" data-carousel-item>
          <img
            src="https://909aa2a9-b08e-42b5-9489-956a43c76381-00-o7r6qwvkzwon.pike.replit.dev/src/assets/global/images/properties/property4.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 1"
          />
        </div>
        {/* Item 2 */}
        <div className="hidden duration-200 ease-linear" data-carousel-item>
          <img
            src="https://909aa2a9-b08e-42b5-9489-956a43c76381-00-o7r6qwvkzwon.pike.replit.dev/src/assets/global/images/properties/property5.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 2"
          />
        </div>
        {/* Item 3 */}
        <div className="hidden duration-200 ease-linear" data-carousel-item="active">
          <img
            src="https://909aa2a9-b08e-42b5-9489-956a43c76381-00-o7r6qwvkzwon.pike.replit.dev/src/assets/global/images/properties/property3.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 3"
          />
        </div>
        {/* Item 4 */}
        <div className="hidden duration-200 ease-linear" data-carousel-item>
          <img
            src="https://909aa2a9-b08e-42b5-9489-956a43c76381-00-o7r6qwvkzwon.pike.replit.dev/src/assets/global/images/properties/property5.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 4"
          />
        </div>
        {/* Item 5 */}
        <div className="hidden duration-200 ease-linear" data-carousel-item>
          <img
            src="https://909aa2a9-b08e-42b5-9489-956a43c76381-00-o7r6qwvkzwon.pike.replit.dev/src/assets/global/images/properties/property6.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 5"
          />
        </div>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Slide;
