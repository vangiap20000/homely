import { Link } from "react-router-dom";

const Card = ({ property }) => {
  return (
    <div className="relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20">
      <div className="overflow-hidden rounded-t-2xl">
        <Link to={property.link}>
          <img
            alt={property.title}
            loading="lazy"
            width="440"
            height="300"
            decoding="async"
            data-nimg="1"
            className="w-full rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition duration-300 delay-75"
            src={property.image}
            style={{ color: "transparent" }}
          />
        </Link>
        <div className="absolute top-6 right-6 p-4 bg-white rounded-full hidden group-hover:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--solar text-black"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 12h16m0 0l-6-6m6 6l-6 6"
            ></path>
          </svg>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col mobile:flex-row gap-5 mobile:gap-0 justify-between mb-6">
          <div>
            <a href={property.link}>
              <h3 className="text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary">
                {property.title}
              </h3>
            </a>
            <p className="text-base font-normal text-black/50 dark:text-white/50">
              {property.address}
            </p>
          </div>
          <div>
            <button className="text-base font-normal text-primary px-5 py-2 rounded-full bg-primary/10">
              {property.price}
            </button>
          </div>
        </div>

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
                <path strokeLinecap="round" d="M19 20v-1.5M5 20v-1.5"></path>
                <path d="M2 15c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 12 4.068 12 5 12h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 13.602 22 14.068 22 15s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 18 19.932 18 19 18H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 16.398 2 15.932 2 15Zm19-3c0-3.771 0-5.657-1.172-6.828S16.771 4 13 4h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12"></path>
                <path d="M18.5 12v-1.5c0-1.886 0-2.828-.586-3.414S16.386 6.5 14.5 6.5h-5c-1.886 0-2.828 0-3.414.586S5.5 8.614 5.5 10.5V12M12 7v5"></path>
              </g>
            </svg>
            <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
              {property.bedrooms} Bedrooms
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
              {property.bathrooms} Bathrooms
            </p>
          </div>
          <div className="flex flex-col gap-2 px-2 xs:px-4 mobile:px-8">
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
              {property.area}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
