"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";

type Image = {
  id: number;
  path: string;
};

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

// Custom Previous Arrow
export const PrevArrow = ({ className, onClick }: ArrowProps) => (
  <div
    className={`${className} absolute -left-8 bottom-9 hidden size-7 items-center justify-center rounded-full bg-black text-white opacity-40 hover:cursor-pointer hover:opacity-80 md:flex`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faAngleLeft} />
  </div>
);

// Custom Next Arrow
export const NextArrow = ({ className, onClick }: ArrowProps) => (
  <div
    className={`${className} absolute -right-8 bottom-9 hidden size-7 items-center justify-center rounded-full bg-black text-white opacity-40 hover:cursor-pointer hover:opacity-80 md:flex`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faAngleRight} />
  </div>
);

const ProductCarousel = ({ images }: { images: Image[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const notFoundImage = "/images/product-not-found.jpg";
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(1);

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Prev Arrow
    // responsive: [
    //   {
    //     breakpoint: 640, // For small mobile screens
    //     settings: {
    //       arrows: false,
    //       slidesToShow: 5,
    //     },
    //   },
    // ],
  };

  return (
    <div className="flex flex-col gap-3">
      {selectedImage ? (
        <Image
          width={600}
          height={456}
          src={selectedImage ? selectedImage : notFoundImage}
          alt=""
          className="w-full rounded-lg"
        />
      ) : (
        <Image
          width={600}
          height={456}
          src={images[0].path}
          alt="product-image"
          className="w-full rounded-lg"
        />
      )}
      {/* sliders */}
      <div className="mx-auto mt-2 max-w-xs lg:mx-auto lg:max-w-sm lg:px-6">
        <Slider {...settings}>
          {images.map((image) => (
            <div
              key={image.id}
              className={`m-2 ${
                selectedImageIndex === image.id
                  ? "scale-110 rounded-lg focus:outline-none"
                  : ""
              }`}
              onClick={() => {
                setSelectedImage(image.path);
                setSelectedImageIndex(image.id);
              }}
            >
              <Image
                src={image.path}
                alt={`Slide image ${image.id}`}
                width={200}
                height={200}
                className="center w-5/6 rounded-lg hover:cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
