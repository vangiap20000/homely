export default function HeaderList({ name, title, description, classDefault = 'text-center bg-cover !pt-40 pb-20 relative overflow-x-hidden' }) {
  return (
    <section className={classDefault}>
      <div className="flex gap-2.5 items-center justify-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--ph text-primary"
            width="20"
            height="20"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M224 120v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-96a15.87 15.87 0 0 1 4.69-11.32l80-80a16 16 0 0 1 22.62 0l80 80A15.87 15.87 0 0 1 224 120"
            />
          </svg>
        </span>
        <p className="text-base font-semibold text-dark/75 dark:text-white/75">
          {name}
        </p>
      </div>
      <h2 className="text-dark text-40 md:text-52 relative font-bold dark:text-white">
        {title}
      </h2>
      <p className="text-lg text-dark/50 dark:text-white/50 font-normal w-full mx-auto">{description}</p>
    </section>
  );
}
