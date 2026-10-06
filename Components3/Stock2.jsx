import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

export default function Stock2() {
  const API = "http://localhost:3000";

  const [stock, setStock] = useState([]);

  const getStock = async () => {
    try {
      let res = await fetch(`${API}/offer2`);
      let data = await res.json();
      setStock(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStock();
  }, []);

  return (
    <div className="mt-10 md:mt-15 lg:mt-20 m-auto w-[95%] md:w-[92%] lg:w-[92%] rounded-2xl bg-gray-300 p-4 md:p-6 lg:p-10">
      <div className="mb-6 md:mb-8 lg:mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h2 className="text-gray-500 text-lg md:text-xl lg:text-2xl font-bold">
          پرفروش ترین محصولات
        </h2>

        <div className="flex items-center gap-1 text-sm md:text-base">
          <a href="#" className="text-gray-700">
            مشاهده همه محصولات
          </a>
          <AiOutlineArrowLeft />
        </div>
      </div>

      <div className="relative">
        {stock.length > 0 && (
          <Swiper
            dir="ltr"
            slidesPerView={1}
            spaceBetween={15}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            navigation={{
              nextEl: ".stock-next",
              prevEl: ".stock-prev",
            }}
            modules={[Autoplay, Navigation]}
            className="w-full"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {stock.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-md">
                  <div className="flex h-60 md:h-70 lg:h-82.5 items-center justify-center p-3 md:p-4 lg:p-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="border-t border-gray-200 p-3 md:p-4 lg:p-5">
                    <p className="mb-2 md:mb-3 lg:mb-4 text-xs md:text-sm text-gray-400">
                      {item.name}
                    </p>

                    <h3 className="truncate text-sm md:text-base leading-7">
                      {item.title}
                    </h3>
                    <span className="text-base text-gray-400 p-2 line-through">
                      {item.oldPrice}
                    </span>

                    <h3 className="mt-3 md:mt-4 lg:mt-5 p-2 md:p-3 lg:text-2xl text-sm md:text-base font-bold text-blue-600 flex items-center justify-center">
                      <span className="text-gray-500 text-sm md:text-base font-normal px-1">
                        تومان
                      </span>

                      {item.price}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <button className="stock-prev absolute left-1 md:left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 md:p-2.5 lg:p-3 shadow-md">
          <FaChevronLeft className="text-sm md:text-base" />
        </button>

        <button className="stock-next absolute right-1 md:right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 md:p-2.5 lg:p-3 shadow-md">
          <FaChevronRight className="text-sm md:text-base" />
        </button>
      </div>
    </div>
  );
}
