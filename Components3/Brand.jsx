import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const API = "http://localhost:3000";

export default function Brand() {
  const [brand, setBrand] = useState([]);

  const getBrand = async () => {
    const res = await fetch(`${API}/brand`);
    const data = await res.json();

    setBrand(data);
  };

  useEffect(() => {
    getBrand();
  }, []);

  return (
    <div className="m-auto w-[92%] md:w-[88%] lg:w-[84%]">
      <h2 className="mt-8 md:mt-10 lg:mt-10 mb-6 md:mb-8 lg:mb-10 text-right text-xl md:text-2xl lg:text-3xl font-bold text-gray-500">
        محبوب ترین برند ها
      </h2>

      <div className="relative w-full">
        {brand.length > 0 && (
          <Swiper
            dir="ltr"
            slidesPerView={2}
            spaceBetween={12}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            navigation={{
              nextEl: ".brand-next",
              prevEl: ".brand-prev",
            }}
            modules={[Autoplay, Navigation]}
            className="w-full"
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            }}
          >
            {brand.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex h-25 md:h-30 lg:h-35 w-full items-center justify-center rounded-xl bg-white p-2 md:p-3 lg:p-4 shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 md:h-20 lg:h-24 w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <button className="brand-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 md:p-2.5 lg:p-3">
          <FaChevronLeft className="text-sm md:text-base" />
        </button>

        <button className="brand-next absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 md:p-2.5 lg:p-3">
          <FaChevronRight className="text-sm md:text-base" />
        </button>
      </div>
    </div>
  );
}
