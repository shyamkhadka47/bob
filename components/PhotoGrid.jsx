"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";  // Import Next.js Image component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";  // Import Swiper styles
import Link from "next/link";

const PhotoGrid = ({ title,haveParentClass, haveChildClass ,button, photos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openSlider = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  const closeSlider = () => setIsOpen(false);

  return (
    <section className="px-[5%] md:px-[10%] my-10 font-serif">
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-between items-center my-12">
        <h2 className="text-4xl my-5 text-center font-bold">{title}</h2>
        {button && <div>
          <Link
            href="/visual-history"
            className="px-5 py-2 border-[2px] font-bold border-green-600 w-max"
          >
            View All
          </Link>
        </div>}
      </div>

      {/* Photo Grid */}
      <div className={`${haveParentClass ? haveParentClass : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"}`}>
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`${haveChildClass ? haveChildClass : "h-[400px] cursor-pointer"} overflow-hidden `}
            onClick={() => openSlider(index)}
          >
            <Image
              src={photo.url}
              width={400}
              height={400}
              alt={photo.alt}
              className="w-full rounded-lg h-full object-cover duration-300 transition-all scale-150 hover:scale-100"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeSlider}
            className="absolute top-4 right-4 text-white"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Swiper Slider */}
          <Swiper
            initialSlide={startIndex}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={false}  // No navigation arrows
            pagination={false}  // No pagination dots
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id} className="flex justify-center items-center">
                <div className="relative h-[80vh] flex justify-center items-center">
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    width={800}    // Define width (adjust as needed)
                    height={800}   // Define height (adjust as needed)
                    className="rounded-lg max-w-full max-h-full object-contain"
                    priority      // Load the image faster for better performance
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default PhotoGrid;
