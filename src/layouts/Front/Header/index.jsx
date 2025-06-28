import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getImageUrlFront } from "../../../utils/getAssets";
import Sidebar from "./Siderbar"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === "dark");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 82);
  };
  
  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("load", handleScroll);   
    }, [])

  useEffect(() => {
    handelSetTheme();
  }, [])

  const setDarkMode = () => {
    localStorage.theme = isDarkMode ? "light" : "dark";
    handelSetTheme();
    setIsDarkMode(!isDarkMode);
  }

  const handelSetTheme = () => {
    const documentElement = document.documentElement
    documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
    documentElement.style.colorScheme = localStorage.theme
  }

  const openSidebar = () => {
    setIsOpen(true)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }
  
  return (
    <header className={`fixed h-24 py-1 z-50 w-full bg-transparent transition-all duration-300 lg:px-0 px-4 ${isScrolled ? 'top-3': 'top-0'}`}>
      <nav className={`container mx-auto max-w-8xl flex items-center justify-between py-4 duration-300 ${isScrolled ? 'shadow-lg bg-white dark:bg-dark rounded-full top-5 px-4': 'shadow-none top-0'}`}>
        <div className="flex justify-between items-center gap-2 w-full">
          <div>
            <Link to="/">
              <img
                alt="logo"
                loading="lazy"
                width="150"
                decoding="async"
                data-nimg="1"
                className="block dark:hidden"
                style={{ color: "transparent" }}
                src={location.pathname === '/' && !isScrolled ? getImageUrlFront("logo.svg") : getImageUrlFront("dark-logo.svg")}
              />
              <img
                alt="logo"
                loading="lazy"
                width="150"
                decoding="async"
                data-nimg="1"
                className="dark:block hidden"
                style={{ color: "transparent" }}
                src={getImageUrlFront("logo.svg")}
              />
            </Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-6">
            <button className="hover:cursor-pointer"
              onClick={setDarkMode}
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className={`iconify iconify--solar dark:hidden block ${location.pathname === '/' && !isScrolled ? 'text-white' : 'text-dark' }`}
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0"
                ></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-2.102 6.148a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.393-.393a.75.75 0 0 1 0-1.06m-12.296 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.061 0M12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--solar dark:block hidden text-white"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"
                ></path>
              </svg>
            </button>
            <div className="hidden md:block">
              <Link
                to="#"
                className={`text-base text-inherit flex items-center gap-2 border-r pr-6 hover:text-primary ${location.pathname === '/' && !isScrolled ? 'text-white' : 'text-dark' }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--ph"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m224 154.8l-47.09-21.11l-.18-.08a19.94 19.94 0 0 0-19 1.75a13 13 0 0 0-1.12.84l-22.31 19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a12 12 0 0 0 .85-1.15a20 20 0 0 0 1.66-18.83a1.4 1.4 0 0 1-.08-.18L101.2 32a20.06 20.06 0 0 0-20.78-11.85A60.27 60.27 0 0 0 28 80c0 81.61 66.39 148 148 148a60.27 60.27 0 0 0 59.85-52.42A20.06 20.06 0 0 0 224 154.8M176 204A124.15 124.15 0 0 1 52 80a36.29 36.29 0 0 1 28.48-35.54l18.82 42l-19.16 22.82a12 12 0 0 0-.86 1.16A20 20 0 0 0 78 130.08c9.42 19.28 28.83 38.56 48.31 48a20 20 0 0 0 19.69-1.45a12 12 0 0 0 1.11-.85l22.43-19.07l42 18.81A36.29 36.29 0 0 1 176 204"
                  ></path>
                </svg>
                +1-212-456-789
              </Link>
            </div>
            <div>
              <button 
                className={`flex items-center gap-3 p-2 sm:px-5 sm:py-3 rounded-full font-semibold hover:cursor-pointer border ${location.pathname === '/' && !isScrolled 
                  ? 'text-dark bg-white dark:text-dark hover:bg-transparent hover:text-white border-white' 
                  : 'bg-dark text-white hover:bg-transparent hover:text-dark dark:bg-white dark:text-dark dark:hover:bg-transparent dark:hover:text-white duration-300'}`}
                onClick={openSidebar}
                >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ph"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"
                    ></path>
                  </svg>
                </span>
                <span className="hidden sm:block">Menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Sidebar open={isOpen} close={closeSidebar}  />
    </header>
  );
};

export default Header;
