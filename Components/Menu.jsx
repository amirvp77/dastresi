import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";

export default function Menu({
  menu,
  searchOpen,
  setMenuOpen,
  isOpen,
  mobileSubMenu,
  setMobileSubMenu,
  mobileSubSubMenu,
  setMobileSubSubMenu,
}) {
  return (
    <>
      <nav
        className={`hidden lg:block w-full h-14 mt-2 ${
          searchOpen ? "pointer-events-none" : ""
        }`}
      >
        <ul className="w-full h-full flex justify-between items-center relative">
          {menu.map((item) => (
            <li
              key={item.id}
              className="relative h-14 group"
              onMouseEnter={() => {
                if (item.dropdown && !searchOpen) {
                  setMenuOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (item.dropdown) {
                  setMenuOpen(false);
                }
              }}
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
                <ul className="absolute top-full right-0 hidden group-hover:block w-55 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.18)] z-[200]">
                  {item.dropdown.map((dropdownItem) => (
                    <li
                      key={dropdownItem.id}
                      className="relative group/sub h-10.5"
                    >
                      <div className="w-full h-full px-3 flex items-center justify-between text-sm text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-blue-600">
                        <span>{dropdownItem.name}</span>

                        {dropdownItem.dropdown && <AiFillCaretLeft />}
                      </div>

                      {dropdownItem.dropdown && (
                        <ul className="absolute right-full top-0 hidden group-hover/sub:block w-55 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.18)] z-[300]">
                          {dropdownItem.dropdown.map((subItem) => (
                            <li
                              key={subItem.id}
                              className="h-10.5 px-3 flex items-center text-sm text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-blue-600"
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

      <div
        className={`lg:hidden fixed top-0 right-0 w-[300px] h-screen bg-white z-[300] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <img
              src="logo.png"
              alt="فروشگاه اینترنتی دسترسی"
              className="w-28 h-auto mx-auto"
            />
          </div>

          <div className="flex justify-between border-b border-gray-200">
            <span className="p-3 text-xs text-gray-500 cursor-pointer">
              خانه
            </span>

            <span className="p-3 text-xs text-gray-500 cursor-pointer">
              بلاگ
            </span>

            <span className="p-3 text-xs text-gray-500 cursor-pointer">
              ارتباط ما
            </span>

            <span className="p-3 text-xs text-gray-500 cursor-pointer">
              درباره ما
            </span>
          </div>

          <div className="flex-1 overflow-y-auto">
            {menu.map((item) => (
              <div key={item.id}>
                <div
                  onClick={() => {
                    if (item.dropdown) {
                      setMobileSubMenu(
                        mobileSubMenu === item.id ? null : item.id,
                      );

                      setMobileSubSubMenu(null);
                    }
                  }}
                  className="min-h-12 px-4 flex items-center justify-between border-b border-gray-100 cursor-pointer"
                >
                  <span className="text-[15px] text-gray-800">{item.name}</span>

                  {item.dropdown && (
                    <AiFillCaretLeft
                      className={`transition-transform ${
                        mobileSubMenu === item.id ? "-rotate-90" : ""
                      }`}
                    />
                  )}
                </div>

                {item.dropdown && mobileSubMenu === item.id && (
                  <div className="bg-gray-50">
                    {item.dropdown.map((dropdownItem) => (
                      <div key={dropdownItem.id}>
                        <div
                          onClick={() => {
                            if (dropdownItem.dropdown) {
                              setMobileSubSubMenu(
                                mobileSubSubMenu === dropdownItem.id
                                  ? null
                                  : dropdownItem.id,
                              );
                            }
                          }}
                          className="min-h-11 px-7 flex items-center justify-between border-b border-gray-100 cursor-pointer"
                        >
                          <span className="text-sm text-gray-600">
                            {dropdownItem.name}
                          </span>

                          {dropdownItem.dropdown && (
                            <AiFillCaretLeft
                              className={`transition-transform ${
                                mobileSubSubMenu === dropdownItem.id
                                  ? "-rotate-90"
                                  : ""
                              }`}
                            />
                          )}
                        </div>

                        {dropdownItem.dropdown &&
                          mobileSubSubMenu === dropdownItem.id && (
                            <div className="bg-gray-100">
                              {dropdownItem.dropdown.map((subItem) => (
                                <div
                                  key={subItem.id}
                                  className="min-h-10 px-10 flex items-center border-b border-gray-200 text-sm text-gray-500 cursor-pointer"
                                >
                                  {subItem.name}
                                </div>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4">
            <button className="w-full h-11 rounded-xl bg-[#0A295A] text-white text-sm cursor-pointer">
              باشگاه مشتریان
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
