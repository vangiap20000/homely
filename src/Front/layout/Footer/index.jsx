const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark">
      <div className="container mx-auto max-w-8xl pt-14 px-4 sm:px-6 lg:px-0">
        <div className="flex lg:items-center justify-between items-end lg:gap-11 pb-14 border-b border-white/10 lg:flex-nowrap flex-wrap gap-6">
          <p className="text-white text-sm lg:max-w-1/5">
            Stay updated with the latest news, promotions, and exclusive offers.
          </p>
          <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-3">
            <div className="flex gap-2 lg:order-1 order-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="rounded-full py-4 px-6 bg-white/10 placeholder:text-white text-white focus-visible:outline-0"
              />
              <button className="text-dark bg-white py-4 px-8 font-semibold rounded-full hover:bg-primary hover:text-white duration-300 hover:cursor-pointer">
                Subscribe
              </button>
            </div>
            <p className="text-white/40 text-sm lg:max-w-[45%] order-1 lg:order-2">
              By subscribing, you agree to receive our promotional emails. You
              can unsubscribe at any time.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--ph text-white hover:text-primary duration-300"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m218.12 209.56l-61-95.8l59.72-65.69a12 12 0 0 0-17.76-16.14l-55.27 60.84l-37.69-59.21A12 12 0 0 0 96 28H48a12 12 0 0 0-10.12 18.44l61 95.8l-59.76 65.69a12 12 0 1 0 17.76 16.14l55.31-60.84l37.69 59.21A12 12 0 0 0 160 228h48a12 12 0 0 0 10.12-18.44M166.59 204L69.86 52h19.55l96.73 152Z"
                ></path>
              </svg>
            </a>

            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--ph text-white hover:text-primary duration-300"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 191.13V156h20a12 12 0 0 0 0-24h-20v-20a12 12 0 0 1 12-12h16a12 12 0 0 0 0-24h-16a36 36 0 0 0-36 36v20H96a12 12 0 0 0 0 24h20v55.13a84 84 0 1 1 24 0"
                ></path>
              </svg>
            </a>

            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--ph text-white hover:text-primary duration-300"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24m48-132H80a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h96a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m36 156a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h96a36 36 0 0 1 36 36ZM196 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-12 sm:gap-10 gap-y-6">
            <div className="md:col-span-7 col-span-12">
              <h2 className="text-white leading-[1.2] text-40 font-medium mb-6 lg:max-w-3/4">
                Begin your path to success contact us today.
              </h2>
              <a
                className="bg-primary text-base font-semibold py-4 px-8 rounded-full text-white hover:bg-white hover:text-dark duration-300 hover:cursor-pointer"
                href="/contactus"
              >
                Get In Touch
              </a>
            </div>

            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                <div>
                  <a
                    className="text-white/40 text-xm hover:text-white"
                    href="/luxury-villa"
                  >
                    Luxury Villas
                  </a>
                </div>
                <div>
                  <a
                    className="text-white/40 text-xm hover:text-white"
                    href="/residential-homes"
                  >
                    Residential Homes
                  </a>
                </div>
                <div>
                  <a
                    className="text-white/40 text-xm hover:text-white"
                    href="/appartment"
                  >
                    Apartments
                  </a>
                </div>
                <div>
                  <a
                    className="text-white/40 text-xm hover:text-white"
                    href="/contactus"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                <div>
                  <a
                    className="text-white/40 text-xm hover:text-white"
                    href="/blogs"
                  >
                    Blog
                  </a>
                </div>
                <div>
                  <a
                    className="text-white/40 text-xm hover:text-white"
                    href="/not-found"
                  >
                    404 Page
                  </a>
                </div>
                <div>
                  <a
                    className="text-white/40 text-xm hover:text-white"
                    href="/documentation"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6">
          <p className="text-white/40 text-sm">
            ©2025 Homely - Design &amp; Developed by{" "}
            <a
              className="hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
              href="https://getnextjstemplates.com/"
            >
              GetNextJs Templates
            </a>
          </p>
          <div className="flex gap-8 items-center">
            <a className="text-white/40 hover:text-primary text-sm" href="#">
              Terms of service
            </a>
            <a className="text-white/40 hover:text-primary text-sm" href="#">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
