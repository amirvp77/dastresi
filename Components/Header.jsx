import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import Menu from "./Menu";

const API = "https://amirvp77.github.io/dastresi-db/db.json";

export default function Header() {
  const [nav, setNav] = useState([]);
  const [menu, setMenu] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [mobileSubSubMenu, setMobileSubSubMenu] = useState(null);

  const getHeader = async () => {
    try {
      const res = await fetch(`${API}`);
      const data = await res.json();
      setNav(data.header);
    } catch (err) {
      console.log(err);
    }
  };

  const getMenu = async () => {
    try {
      const res = await fetch(`${API}`);
      const data = await res.json();
      setMenu(data.menu);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHeader();
    getMenu();
  }, []);

  const closeAll = () => {
    setSearchOpen(false);
    setMenuOpen(false);
    setIsOpen(false);
    setMobileSubMenu(null);
    setMobileSubSubMenu(null);
  };

  const handleMobileMenu = () => {
    if (isOpen) { 
      closeAll();
    } else {
      setSearchOpen(false);
      setMenuOpen(false);
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="h-27.5">
        <header className="fixed p-3 top-0 left-0 z-[100] w-full bg-white shadow-md">
          {searchOpen && (
            <div
              onClick={closeAll}
              className="fixed inset-0 bg-black/20 z-[150]"
            ></div>
          )}

          <div className="max-w-7xl h-full mx-auto px-2 md:px-4 lg:px-4">
            <div className="w-full h-11.25 flex justify-between items-center gap-2">
              <div className="flex gap-2 md:gap-5 lg:gap-8 items-center min-w-0">
                <img
                  src="logo.png"
                  alt="فروشگاه اینترنتی دسترسی"
                  className="w-16.25 md:w-20 lg:w-24 h-auto shrink-0"
                />

                <div
                  onClick={() => {
                    setSearchOpen(true);
                    setMenuOpen(false);
                    setIsOpen(false);
                  }}
                  className="relative z-[200] w-36.25 md:w-60 lg:w-75 h-9.5 lg:h-10 bg-gray-50 rounded-xl shadow-sm flex gap-2 items-center px-2 shrink-0"
                >
                  <IoIosSearch className="shrink-0" />

                  <input
                    type="search"
                    placeholder="جستجوی محصولات"
                    className="w-full h-full bg-transparent outline-none text-xs md:text-sm"
                  />
                </div>

                <div
                  className={`hidden lg:flex gap-6 text-sm text-gray-600 ${
                    searchOpen ? "pointer-events-none" : ""
                  }`}
                >
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

              <div
                className={`flex gap-2 md:gap-3 lg:gap-4 items-center shrink-0 ${
                  searchOpen ? "pointer-events-none" : ""
                }`}
              >
                <div className="relative w-9.5 h-9.5 md:w-10.5 md:h-10.5 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center cursor-pointer">
                  <FaCartShopping className="text-lg md:text-xl text-red-500" />

                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                    0
                  </span>
                </div>

                <div
                  onClick={handleMobileMenu}
                  className="w-10 h-10 md:hidden flex items-center justify-center cursor-pointer"
                >
                  <HiMenu className="text-3xl" />
                </div>

                <button className="hidden md:block h-10.5 px-3 lg:px-4 rounded-xl bg-blue-800 text-white text-xs lg:text-sm hover:bg-blue-900 transition cursor-pointer whitespace-nowrap">
                  ورود و ثبت‌نام
                </button>
              </div>
            </div>

            <Menu
              menu={menu}
              searchOpen={searchOpen}
              setMenuOpen={setMenuOpen}
              isOpen={isOpen}
              mobileSubMenu={mobileSubMenu}
              setMobileSubMenu={setMobileSubMenu}
              mobileSubSubMenu={mobileSubSubMenu}
              setMobileSubSubMenu={setMobileSubSubMenu}
            />
          </div>
        </header>
      </div>
    </>
  );
}
