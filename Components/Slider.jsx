import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const API = "http://localhost:3000";

export default function Slider() {
  const [sliders, setSliders] = useState([]);

  const getSlider = async () => {
    try {
      const res = await fetch(`${API}/slider`);
      const data = await res.json();
      setSliders(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSlider();
  }, []);

  return (
    <>
      {sliders.length > 0 && (
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="
            w-[95%]
            
            rounded-2xl
            h-48

            md:w-[92%]
            md:h-72
            lg:mt-20
            lg:w-[90%]
            lg:h-100
          "
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <img
                src={slider.image}
                alt={`slider ${slider.id}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
