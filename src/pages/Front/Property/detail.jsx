import { getImageUrlGlobal, getIconGlobal } from "../../../utils/getAssets";

const PropertyDetail = () => {
  const description = `
    <div class="flex flex-col gap-5"><p class="text-dark dark:text-white text-xm ">Nestled in the heart of miami, the modern luxe villa at 20 s aurora ave offers a perfect blend of contemporary elegance and smart-home innovation. priced at $570000, this 560 ft² residence features 4 spacious bedrooms, 3 luxurious bathrooms, and expansive living areas designed for comfort and style. built in 2025, the home boasts energy-efficient systems, abundant natural light, and state-of-the-art security features. outdoor spaces include two stylish bar areas, perfect for entertaining 8+ guests. enjoy the ultimate in modern living with premium amenities and a prime location.</p><p class="text-dark dark:text-white text-xm ">Step inside to discover an open-concept layout that seamlessly connects the kitchen, dining, and living spaces. the gourmet kitchen is equipped with top-of-the-line appliances, sleek cabinetry, and a large island perfect for casual dining or meal prep. the sunlit living room offers floor-to-ceiling windows, creating a bright and airy atmosphere while providing stunning views of the outdoor space.</p><p class="text-dark dark:text-white text-xm ">The primary suite serves as a private retreat with a spa-like ensuite bathroom and a spacious walk-in closet. each additional bedroom is thoughtfully designed with comfort and style in mind, offering ample space and modern finishes. the home’s three bathrooms feature high-end fixtures, custom vanities, and elegant tiling.</p><p class="text-dark dark:text-white text-xm ">Outdoor living is equally impressive, with a beautifully landscaped backyard, multiple lounge areas, and two fully equipped bar spaces.</p></div>  
  `;
  return (
    <section className="!pt-44 pb-20 relative">
      <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="lg:col-span-8 col-span-12">
            <h1 className="lg:text-52 text-40 font-semibold text-dark dark:text-white">
              Royal Orchid Villa
            </h1>
            <div className="flex gap-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--ph text-dark/50 dark:text-white/50"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118"
                ></path>
              </svg>
              <p className="text-dark/50 dark:text-white/50 text-xm">
                12 Emerald Heights, Los Angeles
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="flex">
              <div className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--solar"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path
                      strokeLinecap="round"
                      d="M19 20v-1.5M5 20v-1.5"
                    ></path>
                    <path d="M2 15c0-.932 0-.116.152-1.765a2 2 0 0 1 1.083-1.083C3.602 12 4.068 12 5 12h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 13.602 22 14.068 22 15s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 18 19.932 18 19 18H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 16.398 2 15.932 2 15Zm19-3c0-3.771 0-5.657-1.172-6.828S16.771 4 13 4h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12"></path>
                    <path d="M18.5 12v-1.5c0-1.886 0-2.828-.586-3.414S16.386 6.5 14.5 6.5h-5c-1.886 0-2.828 0-3.414.586S5.5 8.614 5.5 10.5V12M12 7v5"></path>
                  </g>
                </svg>
                <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                  6 Bedrooms
                </p>
              </div>
              <div className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--solar"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M3 13.083c0-.077 0-.116.002-.148a1 1 0 0 1 .933-.933c.033-.002.07-.002.148-.002h15.834c.077 0 .115 0 .148.002a1 1 0 0 1 .933.933c.002.032.002.07.002.148c0 .395 0 .593-.014.815c-.209 3.287-3.003 6.189-6.28 6.52c-.221.023-.35.028-.608.038A57 57 0 0 1 12 20.5c-.65 0-1.364-.017-2.098-.044c-.258-.01-.387-.015-.607-.037c-3.278-.332-6.072-3.234-6.28-6.521C3 13.676 3 13.478 3 13.083Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                      d="m6 20l-1 2m13-2l1 2M2 12h20"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M2.25 13a.75.75 0 0 0 1.5 0zM7.6 3.5l.696-.28zm.379.947l.328.674zM6.362 6.192l.695.283zm4.215-1.814l-.295.69zM6.346 8.742l-.698.275a.75.75 0 0 0 .994.413zm5.96-2.567l.297.69a.75.75 0 0 0 .401-.964zM3.75 13V4.385h-1.5V13zM5.385 2.75c.669 0 1.27.407 1.518 1.028l1.393-.557a3.135 3.135 0 0 0-2.91-1.971zM3.75 4.385c0-.903.732-1.635 1.635-1.635v-1.5A3.135 3.135 0 0 0 2.25 4.385zm3.153-.607l.38.948l1.392-.557l-.379-.948zm.14 4.689a2.68 2.68 0 0 1 .014-1.992l-1.39-.565a4.18 4.18 0 0 0-.02 3.107zm4.967-2.98L6.049 8.053l.593 1.377l5.96-2.566zm-1.728-.42c.622.266 1.085.77 1.327 1.383l1.395-.55a3.97 3.97 0 0 0-2.132-2.212zM7.057 6.476a2.57 2.57 0 0 1 1.25-1.354l-.656-1.348A4.07 4.07 0 0 0 5.667 5.91zm1.25-1.354a2.36 2.36 0 0 1 1.975-.053l.59-1.38a3.86 3.86 0 0 0-3.221.085z"
                    ></path>
                  </g>
                </svg>
                <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                  3 Bathrooms
                </p>
              </div>
              <div className="flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--lineicons"
                  width="20"
                  height="20"
                  viewBox="0 0 25 25"
                >
                  <path
                    fill="currentColor"
                    d="M2.571 11.948a.75.75 0 0 0 0 1.105l2.29 2.29a.75.75 0 1 0 1.06-1.06L4.89 13.25h4.313a.75.75 0 0 0 0-1.5H4.89l1.032-1.032a.75.75 0 1 0-1.061-1.06zm10.326-9.187a.748.748 0 0 0-1.12-.018l-2.292 2.29a.75.75 0 1 0 1.061 1.061l1.033-1.032v4.313a.75.75 0 1 0 1.5 0V5.064l1.03 1.03a.75.75 0 1 0 1.062-1.06zm.182 12.863a.75.75 0 0 0-1.5 0v4.316l-1.032-1.033a.75.75 0 1 0-1.061 1.061l2.312 2.313a.75.75 0 0 0 1.061 0l2.312-2.313a.75.75 0 0 0-1.06-1.06l-1.032 1.031zm2.373-3.874a.75.75 0 0 0 0 1.5h4.315l-1.032 1.033a.75.75 0 1 0 1.06 1.061l2.313-2.312a.75.75 0 0 0-.013-1.073l-2.3-2.3a.75.75 0 0 0-1.06 1.06l1.03 1.032z"
                  ></path>
                </svg>
                <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                  200m<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8 gap-8">
          <div className="lg:col-span-8 col-span-12 row-span-2">
            <div className="w-full h-[540px]">
              <img
                alt="Main Property Image"
                loading="lazy"
                width="400"
                height="500"
                decoding="async"
                data-nimg="1"
                className="rounded-2xl w-full h-full object-cover"
                src={getImageUrlGlobal("properties/property-detail-mt-4.jpg")}
                style={{ color: "transparent" }}
              />
            </div>
          </div>
          <div className="lg:col-span-4 lg:block hidden w-full h-[335px]">
            <img
              alt="Property Image 2"
              loading="lazy"
              width="400"
              height="500"
              decoding="async"
              data-nimg="1"
              className="rounded-2xl w-full h-full object-cover"
              src={getImageUrlGlobal("properties/property-detail-mt-1.jpg")}
              style={{ color: "transparent" }}
            />
          </div>
          <div className="lg:col-span-2 col-span-6 w-full h-[155px]">
            <img
              alt="Property Image 3"
              loading="lazy"
              width="400"
              height="500"
              decoding="async"
              data-nimg="1"
              className="rounded-2xl w-full h-full object-cover"
              src={getImageUrlGlobal("properties/property-detail-mt-2.jpg")}
              style={{ color: "transparent" }}
            />
          </div>
          <div className="lg:col-span-2 col-span-6 w-full h-[155px]">
            <img
              alt="Property Image 4"
              loading="lazy"
              width="400"
              height="500"
              decoding="async"
              data-nimg="1"
              className="rounded-2xl w-full h-full object-cover"
              src={getImageUrlGlobal("properties/property-detail-mt-3.jpg")}
              style={{ color: "transparent" }}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-8 col-span-12">
            <h3 className="text-xl font-medium">Property details</h3>
            <div className="py-8 my-8 border-y border-dark/10 dark:border-white/20 flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div>
                  <img
                    alt=""
                    loading="lazy"
                    width="400"
                    height="500"
                    decoding="async"
                    data-nimg="1"
                    className="w-8 h-8 dark:hidden"
                    src={getIconGlobal("water.svg")}
                    style={{ color: "transparent" }}
                  />
                  <img
                    alt=""
                    loading="lazy"
                    width="400"
                    height="500"
                    decoding="async"
                    data-nimg="1"
                    className="w-8 h-8 dark:block hidden"
                    src={getIconGlobal("water-white.svg")}
                    style={{ color: "transparent" }}
                  />
                </div>
                <div>
                  <h3 className="text-dark dark:text-white text-xm">
                    Property details
                  </h3>
                  <p className="text-base text-dark/50 dark:text-white/50">
                    One of the few homes in the area with a private pool.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <img
                    alt=""
                    loading="lazy"
                    width="400"
                    height="500"
                    decoding="async"
                    data-nimg="1"
                    className="w-8 h-8 dark:hidden"
                    src={getIconGlobal("smart-home-access.svg")}
                    style={{ color: "transparent" }}
                  />
                  <img
                    alt=""
                    loading="lazy"
                    width="400"
                    height="500"
                    decoding="async"
                    data-nimg="1"
                    className="w-8 h-8 dark:block hidden"
                    src={getIconGlobal("smart-home-access-white.svg")}
                    style={{ color: "transparent" }}
                  />
                </div>
                <div>
                  <h3 className="text-dark dark:text-white text-xm">
                    Smart home access
                  </h3>
                  <p className="text-base text-dark/50 dark:text-white/50">
                    Easily check yourself in with a modern keypad system.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <img
                    alt=""
                    loading="lazy"
                    width="400"
                    height="500"
                    decoding="async"
                    data-nimg="1"
                    className="w-8 h-8 dark:hidden"
                    src={getIconGlobal("energyefficient.svg")}
                    style={{ color: "transparent" }}
                  />
                  <img
                    alt=""
                    loading="lazy"
                    width="400"
                    height="500"
                    decoding="async"
                    data-nimg="1"
                    className="w-8 h-8 dark:block hidden"
                    src={getIconGlobal("energyefficient-white.svg")}
                    style={{ color: "transparent" }}
                  />
                </div>
                <div>
                  <h3 className="text-dark dark:text-white text-xm">
                    Energy efficient
                  </h3>
                  <p className="text-base text-dark/50 dark:text-white/50">
                    Built in 2025 with sustainable and smart-home features.
                  </p>
                </div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
              <h3 className="text-xl font-medium">What this property offers</h3>
              <div className="grid grid-cols-3 mt-5 gap-6">
                <div className="flex items-center gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ph text-dark dark:text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 11.32a88 88 0 0 1 11 13.48L167.55 119l-27.92-78.22a87.34 87.34 0 0 1 50.6 25M155.59 133l-18.16 21.37l-27.59-5l-9.43-26.37l18.16-21.37l27.59 5ZM65.77 65.78a87.34 87.34 0 0 1 56.66-25.59l17.51 49L58.3 74.32a88 88 0 0 1 7.47-8.54m-19.12 95.76a88.4 88.4 0 0 1 2.53-72.62l51.21 9.35Zm19.12 28.68a88 88 0 0 1-11-13.48L88.45 137l27.92 78.18a87.34 87.34 0 0 1-50.6-24.96m124.46 0a87.34 87.34 0 0 1-56.66 25.59l-17.51-49l81.64 14.91a88 88 0 0 1-7.47 8.5m-34.62-32.49l53.74-63.27a88.4 88.4 0 0 1-2.53 72.62Z"
                    ></path>
                  </svg>
                  <p className="text-base dark:text-white text-dark">
                    Smart Home Integration
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ph text-dark dark:text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M100 116.43a8 8 0 0 0 4-6.93v-72A8 8 0 0 0 93.34 30a104.06 104.06 0 0 0-67.61 117a8 8 0 0 0 4.52 5.81a7.9 7.9 0 0 0 3.35.74a8 8 0 0 0 4-1.07ZM88 49.62v55.26l-47.88 27.63C40 131 40 129.48 40 128a88.12 88.12 0 0 1 48-78.38M128 24a8 8 0 0 0-8 8v91.82l-78.81 45.91a8 8 0 0 0-2.87 11A104 104 0 1 0 128 24m0 192a88.47 88.47 0 0 1-71.49-36.68l75.52-44a8 8 0 0 0 4-6.92V40.36A88 88 0 0 1 128 216"
                    ></path>
                  </svg>
                  <p className="text-base dark:text-white text-dark">
                    Spacious Living Areas
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ph text-dark dark:text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69L85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 136H40V80h176z"
                    ></path>
                  </svg>
                  <p className="text-base dark:text-white text-dark">
                    Energy Efficiency
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ph text-dark dark:text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16"
                    ></path>
                  </svg>
                  <p className="text-base dark:text-white text-dark">
                    Natural Light
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ph text-dark dark:text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M192 184H32V72h160zm48-22.95l-32-21.33v-23.44L240 95Z"
                    ></path>
                  </svg>
                  <p className="text-base dark:text-white text-dark">
                    Security Systems
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ph text-dark dark:text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72"
                    ></path>
                  </svg>
                  <p className="text-base dark:text-white text-dark">
                    Outdoor Spaces
                  </p>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938779.7831767448!2d71.05098621661072!3d23.20271516446136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82dd003ff749%3A0x359e803f537cea25!2sGANESH%20GLORY%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1715676641521!5m2!1sen!2sin"
              width="1114"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl w-full"
            ></iframe>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden">
              <h4 className="text-dark text-3xl font-medium dark:text-white">
                590,000
              </h4>
              <p className="text-sm text-dark/50 dark:text-white">
                Discounted Price
              </p>
              <a
                className="py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer"
                href="#"
              >
                Get in touch
              </a>
              <div className="absolute right-0 top-4 -z-[1]">
                <img
                  alt="vector"
                  loading="lazy"
                  width="400"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  src={getIconGlobal("testimonial_vector.svg")}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div className="border p-10 rounded-2xl border-dark/10 dark:border-white/20 mt-10 flex flex-col gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--ph text-primary"
                width="44"
                height="44"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m219.31 108.68l-80-80a16 16 0 0 0-22.62 0l-80 80A15.87 15.87 0 0 0 32 120v96a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-96a15.87 15.87 0 0 0-4.69-11.32M208 208H48v-88l80-80l80 80Z"
                />
              </svg>
              <p className="text-xm text-dark dark:text-white">
                I found my ideal home in no time! The listings were detailed,
                the photos were accurate, and the whole process felt seamless.
                Customer service was top-notch, answering all my questions. I
                will definitely use this platform again in the future!
              </p>
              <div className="flex items-center gap-6">
                <img
                  alt="Emily & John Smith"
                  loading="lazy"
                  width="400"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="w-20 h-20 rounded-2xl"
                  src={getImageUrlGlobal("testimonial/smiths.jpg")}
                  style={{ color: "transparent" }}
                />
                <div>
                  <h3 className="text-xm text-dark dark:text-white">
                    Emily & John Smith
                  </h3>
                  <h4 className="text-base text-dark/50 dark:text-white/50">
                    Buyer
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetail;
