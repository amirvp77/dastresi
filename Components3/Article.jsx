import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Article() {
  const API = "https://amirvp77.github.io/dastresi-db/db.json";

  const [article, setArticle] = useState([]);

  const getArticle = async () => {
    try {
      let res = await fetch(`${API}`);
      let data = await res.json();

      setArticle(data.Article);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div className="m-auto w-[92%] md:w-[88%] lg:w-[84%]">
      <h2 className="mt-8 mb-6 text-right text-xl font-bold text-gray-500 md:mt-10 md:mb-8 md:text-2xl lg:mb-10 lg:text-3xl">
        آخرین مقالات
      </h2>

      <div className="relative w-full">
        {article.length > 0 && (
          <Swiper
            dir="rtl"
            slidesPerView={2}
            spaceBetween={12}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".article-next",
              prevEl: ".article-prev",
            }}
            modules={[Autoplay, Navigation]}
            className="w-full"
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {article.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-67.5 overflow-hidden rounded-xl bg-white shadow-md">
                  <img
                    src={item.image}
                    alt={item.des}
                    className="h-32 w-full object-cover md:h-40 lg:h-44"
                  />

                  <p className="p-3 text-right text-sm font-bold text-gray-700 md:text-base">
                    {item.des}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <button className="article-prev absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md md:p-2.5 lg:p-3">
          <FaChevronRight className="text-sm md:text-base" />
        </button>

        <button className="article-next absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md md:p-2.5 lg:p-3">
          <FaChevronLeft className="text-sm md:text-base" />
        </button>
      </div>
    </div>
  );
}
