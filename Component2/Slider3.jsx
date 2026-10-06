import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const API = "http://localhost:3000";

export default function Slider3() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch(`${API}/slideItem`);
    const data = await res.json();

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-[92%] md:w-[88%] lg:w-[84%] m-auto">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 lg:mb-10 mt-8 md:mt-10">
        دسته بندی های منتخب
      </h1>

      <div className="relative w-full">
        {products.length > 0 && (
          <Swiper
            dir="ltr"
            slidesPerView={2}
            spaceBetween={15}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            modules={[Autoplay, Navigation]}
            className="w-full"
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col items-center rounded-xl p-2 md:p-3 lg:p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-32 md:h-40 lg:h-52 w-full object-contain"
                  />

                  <p className="mt-2 md:mt-3 lg:mt-4 text-xs md:text-sm text-gray-500">
                    {product.name}
                  </p>

                  <h2 className="mt-1 md:mt-2 text-center text-sm md:text-base font-bold text-gray-800">
                    {product.title}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <button className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 md:p-2.5 lg:p-3 shadow-md">
          <FaChevronLeft className="text-sm md:text-base" />
        </button>

        <button className="swiper-button-next-custom absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 md:p-2.5 lg:p-3 shadow-md">
          <FaChevronRight className="text-sm md:text-base" />
        </button>
      </div>
    </div>
  );
}
