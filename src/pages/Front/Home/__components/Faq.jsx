import { useState } from "react";
import { getImageUrlFront } from "../../../../utils/getAssets";

const faqs = [
  {
    id: 1,
    question: "Can I personalize my homely home?",
    answer:
      "Discover a diverse range of premium properties, from luxurious apartments to spacious villas, tailored to your needs.",
  },
  {
    id: 2,
    question: "Where can I find homely homes?",
    answer:
      "Homely homes are available in prime locations across the country, ensuring accessibility and convenience.",
  },
  {
    id: 3,
    question: "What steps to buy a homely?",
    answer:
      "Start by browsing listings, schedule visits, get pre-approved, and work with our expert agents to close the deal seamlessly.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="lg:mx-0 mx-auto">
            <img
              alt="FAQs illustration"
              loading="lazy"
              width="680"
              height="644"
              className="lg:w-full"
              src={getImageUrlFront("faq-image.png")}
            />
          </div>
          <div className="lg:px-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--ph text-2xl text-primary "
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M224 120v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-96a15.87 15.87 0 0 1 4.69-11.32l80-80a16 16 0 0 1 22.62 0l80 80A15.87 15.87 0 0 1 224 120"
                ></path>
              </svg>
              FAQs
            </p>
            <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white">
              Everything about Homely homes
            </h2>
            <p className="text-dark/50 dark:text-white/50 pr-20">
              We know that buying, selling, or investing in real estate can be
              overwhelming. Here are some frequently asked questions to help
              guide you through the process.
            </p>

            <div className="my-8">
              <div className="w-full flex flex-col gap-6">
                {faqs.map((item, index) => (
                  <div key={index} className="last:border-b-0">
                    <h3 className="flex">
                      <button
                        type="button"
                        className={`cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 p-6 bg-dark/5 dark:bg-white/10 text-dark dark:text-white text-xl flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium transition-all outline-none focus-visible:ring-[3px] [&[data-state=open]>svg]:rotate-180`}
                        onClick={() => toggleFAQ(index)}
                      >
                        {`${index + 1}. ${item.question}`}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </h3>

                    {openIndex === index && (
                      <div className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-dark/50 dark:text-white/50 text-base px-6 py-2">
                        <div className="pt-0 pb-0">{item.answer}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
