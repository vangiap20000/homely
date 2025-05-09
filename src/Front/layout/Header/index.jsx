import { Link } from "react-router-dom";
import { getImageUrlFront, getIconGlobal } from "../../../utils/getAssets";

const Header = () => {
  return (
    <header className="fixed h-24 py-1 z-50 w-full bg-transparent transition-all duration-300 lg:px-0 px-4 top-0">
      <nav className="container mx-auto max-w-8xl flex items-center justify-between py-4 duration-300 shadow-none top-0">
        <div className="flex justify-between items-center gap-2 w-full">
          <div>
            <Link to="/">
              <img alt="logo" loading="lazy" width="150" height="68" decoding="async" data-nimg="1" className="block dark:hidden" 
                style={{ color: 'transparent' }} src={getImageUrlFront("dark-logo.svg")} />
              <img alt="logo" loading="lazy" width="150" height="68" decoding="async" data-nimg="1" className="block dark:hidden"
                style={{ color: 'transparent' }} src={getImageUrlFront("logo.svg")} />
            </Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-6">
            <button className="hover:cursor-pointer">
              <img alt="icon" loading="lazy" decoding="async" src={getIconGlobal("sun.svg")} />
              {/* <img alt="icon" loading="lazy" decoding="async" src="/assets/global/icons/moon.svg" /> */}
            </button>
            <div className="hidden md:block">
               <Link to="#" className="text-base text-inherit flex items-center gap-2 border-r pr-6 text-dark hover:text-primary">
                 <img alt="icon" loading="lazy" decoding="async" src={getIconGlobal("phone.svg")} />
                 +1-212-456-789
               </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
