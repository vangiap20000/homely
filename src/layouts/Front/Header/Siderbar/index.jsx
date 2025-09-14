import { getIconGlobal } from "../../../../utils/getAssets";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../../../store/authSlice";
import { showToast } from '../../../../store/toastSlice';

const Sidebar = ({ open, close }) => {
  const setClose = () => {
    close()
  }
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    setClose();
    dispatch(showToast({ message: 'Logout successful!', type: 'success' }));
  };
  return (
    <>
      {open && <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" onClick={setClose}></div>}
      <div className={`fixed top-0 right-0 h-full w-full bg-dark shadow-lg transition-transform duration-300 max-w-2xl ${open ? 'translate-x-0' : 'translate-x-full'} translate-x-0 z-50 px-10 md:px-20 overflow-auto no-scrollbar`}>
        <div className="flex flex-col h-full justify-between">
          <div className="">
            <div className="flex items-center justify-start py-10">
              <button aria-label="Close mobile menu" onClick={setClose} className="bg-white p-3 rounded-full hover:cursor-pointer">
                <img src={getIconGlobal("close.svg")} alt="close" />
              </button>
            </div>
            <nav className="flex flex-col items-start gap-4">
              <ul className="w-full">
                <li className="flex items-center group w-fit">
                  <div className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:block group-hover:w-6 group-hover:mr-4"></div>
                  <Link to="/" className="py-3 text-3xl sm:text-5xl font-medium text-white/40 rounded-full group-hover:text-primary" onClick={setClose}>
                    Home
                  </Link>
                </li>
                <li className="flex items-center group w-fit">
                  <div className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:block group-hover:w-6 group-hover:mr-4"></div>
                  <Link to="/properties" className="py-3 text-3xl sm:text-5xl font-medium text-white/40 rounded-full group-hover:text-primary" onClick={setClose}>
                    Properties
                  </Link>
                </li>
                <li className="flex items-center group w-fit">
                  <div className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:block group-hover:w-6 group-hover:mr-4"></div>
                  <Link to="/blogs" className="py-3 text-3xl sm:text-5xl font-medium text-white/40 rounded-full group-hover:text-primary" onClick={setClose}>
                    Blog
                  </Link>
                </li>
                <li className="flex items-center group w-fit">
                  <div className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:block group-hover:w-6 group-hover:mr-4"></div>
                  <Link to="/contactus" className="py-3 text-3xl sm:text-5xl font-medium text-white/40 rounded-full group-hover:text-primary" onClick={setClose}>
                    Contact
                  </Link>
                </li>
                {/* <li className="flex items-center group w-fit">
                  <div className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:block group-hover:w-6 group-hover:mr-4"></div>
                  <Link to="#" className="py-3 text-3xl sm:text-5xl font-medium text-white/40 rounded-full group-hover:text-primary" onClick={setClose}>
                    Docs
                  </Link>
                </li> */}
                <li className="flex items-center gap-4">
                  {user
                    ? (
                      <button className="cursor-pointer py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full border border-primary font-semibold mt-3 hover:bg-transparent hover:text-primary duration-300"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    ) :
                    (
                      <>
                        <Link to="/login" className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full border border-primary font-semibold mt-3 hover:bg-transparent hover:text-primary duration-300" onClick={setClose}>
                          Sign In
                        </Link>
                        <Link to="/signup" className="py-4 px-8 bg-transparent border border-primary text-base leading-4 block w-fit text-primary rounded-full font-semibold mt-3 hover:bg-primary hover:text-white duration-300" onClick={setClose}>
                          Sign up
                        </Link>
                      </>
                    )}
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-1 my-16 text-white">
            <p className="text-base sm:text-xm font-normal text-white/40">Contact</p>
            <a className="text-base sm:text-xm font-medium text-inherit hover:text-primary" href="#">giap@homely.com</a>
            <a className="text-base sm:text-xm font-medium text-inherit hover:text-primary" href="#">+1-212-456-7890</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
