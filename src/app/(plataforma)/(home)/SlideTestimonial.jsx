import { FaStar, FaUserCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const SlideTestimonial = () => {
  return (
    <div>
        <div>
      <div className="w-80 mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}>
          <SwiperSlide>
            <div className="border-2 shadow-2xl shadow-link-500 border-link-100 rounded-lg xl:w-96 md:w-80 ">
              <p className="flex justify-center items-center mx-auto p-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                facere deserunt quo blanditiis pariatur, nulla ratione similique
                hic delectus, ipsam qui.
              </p>
              <div className="px-6 py-4 flex gap-x-3 items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <span className="">
                    <FaUserCircle className="text-4xl" />
                  </span>
                  <div>
                    <div className=" text-xs xl:text-lg text-link-500">
                      <span>User Name</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <span>@UserName</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-xs gap-2">
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 shadow-2xl shadow-link-500 border-link-100 rounded-lg xl:w-96 md:w-80 ">
              <p className="flex justify-center items-center mx-auto p-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                facere deserunt quo blanditiis pariatur, nulla ratione similique
                hic delectus, ipsam qui.
              </p>
              <div className="px-6 py-4 flex gap-x-3 items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <span className="">
                    <FaUserCircle className="text-4xl" />
                  </span>
                  <div>
                    <div className=" text-xs xl:text-lg text-link-500">
                      <span>User Name</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <span>@UserName</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-xs gap-2">
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 shadow-2xl shadow-link-500 border-link-100 rounded-lg xl:w-96 md:w-80 ">
              <p className="flex justify-center items-center mx-auto p-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                facere deserunt quo blanditiis pariatur, nulla ratione similique
                hic delectus, ipsam qui.
              </p>
              <div className="px-6 py-4 flex gap-x-3 items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <span className="">
                    <FaUserCircle className="text-4xl" />
                  </span>
                  <div>
                    <div className=" text-xs xl:text-lg text-link-500">
                      <span>User Name</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <span>@UserName</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-xs gap-2">
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 shadow-2xl shadow-link-500 border-link-100 rounded-lg xl:w-96 md:w-80 ">
              <p className="flex justify-center items-center mx-auto p-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                facere deserunt quo blanditiis pariatur, nulla ratione similique
                hic delectus, ipsam qui.
              </p>
              <div className="px-6 py-4 flex gap-x-3 items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <span className="">
                    <FaUserCircle className="text-4xl" />
                  </span>
                  <div>
                    <div className=" text-xs xl:text-lg text-link-500">
                      <span>User Name</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <span>@UserName</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-xs gap-2">
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 shadow-2xl shadow-link-500 border-link-100 rounded-lg xl:w-96 md:w-80 ">
              <p className="flex justify-center items-center mx-auto p-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                facere deserunt quo blanditiis pariatur, nulla ratione similique
                hic delectus, ipsam qui.
              </p>
              <div className="px-6 py-4 flex gap-x-3 items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <span className="">
                    <FaUserCircle className="text-4xl" />
                  </span>
                  <div>
                    <div className=" text-xs xl:text-lg text-link-500">
                      <span>User Name</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <span>@UserName</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-xs gap-2">
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 shadow-2xl shadow-link-500 border-link-100 rounded-lg xl:w-96 md:w-80 ">
              <p className="flex justify-center items-center mx-auto p-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                facere deserunt quo blanditiis pariatur, nulla ratione similique
                hic delectus, ipsam qui.
              </p>
              <div className="px-6 py-4 flex gap-x-3 items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <span className="">
                    <FaUserCircle className="text-4xl" />
                  </span>
                  <div>
                    <div className=" text-xs xl:text-lg text-link-500">
                      <span>User Name</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <span>@UserName</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-xs gap-2">
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar className="text-btn-400 dark:text-btn-200" />
                  <FaStar />
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
    </div>
  )
}
