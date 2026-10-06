import { useEffect, useState } from "react";

const API = "http://localhost:3000";

export default function Items() {
  const [Item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getItem = async () => {
    try {
      let res = await fetch(`${API}/items`);
      let data = await res.json();

      setItem(data);
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full gap-x-2 flex justify-center items-center">
        <div className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full"></div>
        <div className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full"></div>
        <div className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span>Error! Task failed successfully.</span>
      </div>
    );
  }

  return (
    <>
      <div className="mt-10 md:mt-15 lg:mt-20 m-auto w-[95%] md:w-[92%] lg:w-[92%] h-auto bg-gray-300 rounded-2xl p-4 md:p-6 lg:p-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 lg:mb-10 gap-4">
          <h1 className="px-0 md:px-5 lg:px-10">
            <span className="text-red-600">%</span>
            تخفیف های روزانه دسترسی
          </h1>

          <h2 className="px-0 md:px-5 lg:px-10">timer</h2>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10">
          <div className="w-full lg:w-[65%] flex flex-col md:flex-row gap-5 lg:gap-10">
            {Item.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="w-full md:w-1/2 h-100 md:h-110 lg:h-125 bg-white rounded-2xl p-4 md:p-5 flex flex-col justify-between"
              >
                <img
                  src={item.image}
                  className="w-full h-50 md:h-55 lg:h-62.5 object-contain"
                />

                <h2 className="text-center text-base md:text-lg">
                  {item.name}
                </h2>

                <div className="flex justify-between gap-2 text-sm md:text-base">
                  <span className="text-gray-400 line-through">
                    {item.oldPrice}
                  </span>

                  <span className="text-red-600">
                    {item.discount} تومان تخفیف
                  </span>
                </div>

                <p className="text-blue-600 text-left text-lg md:text-xl font-bold">
                  {item.price}
                  <span className="text-gray-500 text-sm md:text-base font-normal px-1">
                    تومان
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[35%] flex flex-col gap-5">
            {Item.slice(2, 5).map((item) => (
              <div
                key={item.id}
                className="h-35 md:h-40 lg:h-40 bg-white rounded-2xl p-4 flex gap-4 md:gap-5"
              >
                <img src={item.image} className="w-24 md:w-30 object-contain" />

                <div className="flex flex-col gap-2 justify-center min-w-0">
                  <h3 className="text-xs md:text-sm">{item.name}</h3>

                  <div className="flex flex-col md:flex-row justify-between gap-1 md:gap-3 text-xs md:text-sm">
                    <span className="text-gray-400 line-through">
                      {item.oldPrice}
                    </span>

                    <span className="text-red-600">
                      {item.discount} تومان تخفیف
                    </span>
                  </div>

                  <p className="text-blue-600 text-lg md:text-xl mt-2 md:mt-4 font-bold">
                    {item.price}
                    <span className="text-gray-500 text-sm md:text-base font-normal px-1">
                      تومان
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
