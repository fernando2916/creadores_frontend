import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { ItemServicios } from "./ItemServicios";

const SlideServicios = () => {
  return (
    <div className="w-[324px] mx-auto">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}>
        {ItemServicios.map((item) => (
          <SwiperSlide key={item.href}>
            <div className="shadow-2xl h-72 shadow-link-500 p-4 border-double border-2 border-link-500 rounded-lg">
              <Link href={item.href}>
                <div className="flex place-content-center relative">
                  <div className="h-16 w-16 bg-btn-900 rounded-full">
                    <span className="flex items-center justify-center p-3.5 text-4xl text-cyan-400">
                      {item.icono}
                    </span>
                  </div>
                </div>
                <h2 className="flex justify-center text-xl font-medium py-4">
                  {item.nombre}
                </h2>
                <p className="flex text-justify items-center text-lg justify-center">
                  {item.text}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideServicios;
