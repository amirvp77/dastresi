import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
import Menu from "./Menu";

const API = "http://localhost:3000";

export default function Header() {
  const [nav, setNav] = useState([]);
  const [menu, setMenu] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [isOpen, SetIsOpen] = useState(false);

  const getHeader = async () => {
    try {
      const res = await fetch(`${API}/header`);
      const data = await res.json();
      setNav(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMenu = async () => {
    try {
      const res = await fetch(`${API}/menu`);
      const data = await res.json();
      setMenu(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHeader();
    getMenu();
  }, []);

  return (
    <>
      <div
        className={`fixed w-[50%] h-screen bg-amber-500 z-300 md:hidden ${isOpen ? "" : "hidden"}`}
      ></div>

      <div className="h-27.5">
        {overlay && (
          <div
            onClick={() => setOverlay(false)}
            className="fixed inset-0 bg-black/50 transition-all duration-400 z-90"
          ></div>
        )}
        <header className="fixed p-3 top-0 left-0 z-100 w-full bg-white shadow-md">
          <div className="max-w-7xl h-full mx-auto px-2 md:px-4 lg:px-4">
            <div className="w-full h-11.25 flex justify-between items-center gap-2">
              <div className="flex gap-2 md:gap-5 lg:gap-8 items-center min-w-0">
                <img
                  src="logo.png"
                  alt="فروشگاه اینترنتی دسترسی"
                  className="w-[65px] md:w-[80px] lg:w-[96px] h-auto shrink-0"
                />

                <div
                  onClick={() => setOverlay(true)}
                  className="w-[145px] md:w-[240px] lg:w-[300px] h-[38px] lg:h-[40px] bg-gray-50 rounded-xl shadow-sm flex gap-2 items-center px-2 shrink-0"
                >
                  <IoIosSearch className="shrink-0" />

                  <input
                    type="search"
                    placeholder="جستجوی محصولات"
                    className="w-full h-full bg-transparent outline-none text-xs md:text-sm"
                  />
                </div>

                <div className="hidden lg:flex gap-6 text-sm text-gray-600">
                  {nav.map((item) => (
                    <span
                      key={item.id}
                      className="cursor-pointer hover:text-orange-500 transition whitespace-nowrap"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 md:gap-3 lg:gap-4 items-center shrink-0">
                <div className="relative w-[38px] h-[38px] md:w-[42px] md:h-[42px] bg-gray-50 rounded-xl shadow-sm flex items-center justify-center cursor-pointer">
                  <FaCartShopping className="text-lg md:text-xl text-red-500" />

                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                    0
                  </span>
                </div>
                <div
                  onClick={() => SetIsOpen(!isOpen)}
                  className="w-5 h-10 bg-black"
                ></div>

                <button className="hidden md:block h-[42px] px-3 lg:px-4 rounded-xl bg-blue-800 text-white text-xs lg:text-sm hover:bg-blue-900 transition cursor-pointer whitespace-nowrap">
                  ورود و ثبت‌نام
                </button>
              </div>
            </div>

            <nav className="hidden lg:block w-full h-14 mt-2">
              <ul className="w-full h-full flex justify-between items-center relative">
                {menu.map((item) => (
                  <li
                    key={item.id}
                    onMouseEnter={() => setOverlay(true)}
                    onMouseLeave={() => setOverlay(false)}
                    className="relative h-[56px] group"
                  >
                    <div className="h-full gap-1 flex items-center py-3 border-b-[3px] border-transparent group-hover:border-red-500 group-hover:text-red-500 transition-colors">
                      <span className="cursor-pointer text-gray-500 whitespace-nowrap">
                        {item.name}
                      </span>

                      {item.id !== "1" && (
                        <AiFillCaretDown className="mt-2 text-gray-500" />
                      )}
                    </div>

                    {item.dropdown && (
                      <ul className="absolute top-full right-0 hidden group-hover:block w-[220px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.18)] z-[200]">
                        {item.dropdown.map((dropdownItem) => (
                          <li
                            key={dropdownItem.id}
                            className="relative group/sub h-[42px]"
                          >
                            <div className="w-full h-full px-3 flex items-center justify-between text-sm text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                              <span>{dropdownItem.name}</span>

                              {dropdownItem.dropdown && (
                                <span>
                                  <AiFillCaretLeft />
                                </span>
                              )}
                            </div>

                            {dropdownItem.dropdown && (
                              <ul className="absolute right-full top-0 hidden group-hover/sub:block w-[220px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.18)] z-[300]">
                                {dropdownItem.dropdown.map((subItem) => (
                                  <li
                                    key={subItem.id}
                                    className="h-[42px] px-3 flex items-center text-sm text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-blue-600"
                                  >
                                    {subItem.name}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
