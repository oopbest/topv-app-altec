"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import { ProductMedia } from "@/interface/dto/product-detail.dto";
import { PRODUCT_NOT_FOUND_IMG } from "@/const/product.const";

type Image = {
  id: number;
  path: string;
};

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const ProductCarousel = ({ media }: { media: ProductMedia[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    if (media.length > 0) {
      const firstMedia = media[0];
      if (
        firstMedia.media_type === "external-video" &&
        firstMedia.video_content
      ) {
        setSelectedVideo(firstMedia.video_content.video_url);
      } else {
        setSelectedImage(firstMedia.media_path);
      }
    }
  }, [media]);

  // Custom Previous Arrow
  const PrevArrow = ({ className, onClick }: ArrowProps) => (
    <div
      className={`${className} ${
        media.length < 3 ? "hidden" : "hidden md:flex"
      } absolute -left-14 top-5 lg:top-8 size-7 items-center justify-center rounded-full bg-black text-white opacity-40 hover:cursor-pointer hover:opacity-80 lg:-left-8 xl:-left-14`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </div>
  );

  // Custom Next Arrow
  const NextArrow = ({ className, onClick }: ArrowProps) => (
    <div
      className={`${className} ${
        media.length < 3 ? "hidden" : "hidden md:flex"
      } absolute -right-14 top-5 lg:top-8 size-7 items-center justify-center rounded-full bg-black text-white opacity-40 hover:cursor-pointer hover:opacity-80 lg:-right-8 xl:-right-14`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
  );

  // Slick settings
  const settings = {
    dots: false,
    infinite: media.length >= 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: media.length >= 3,
    centerMode: media.length >= 3,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Prev Arrow
  };

  // EmbedUrl Youtube
  let embededUrl = "";
  if (selectedVideo) {
    const ytId = selectedVideo.replace("https://youtu.be/", "");
    embededUrl = `https://www.youtube.com/embed/${ytId}`;
  }

  return (
    <div className="item-center flex h-full flex-col justify-evenly gap-3">
      {selectedVideo ? (
        <>
          <iframe
            width="100%"
            height="400px"
            src={embededUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="YouTube video player"
            className="rounded-lg"
          ></iframe>
        </>
      ) : (
        <>
          <div className="flex w-full items-center overflow-hidden">
            <Image
              width={600}
              height={456}
              src={selectedImage || PRODUCT_NOT_FOUND_IMG}
              alt="product-image"
              className="w-full rounded-lg object-contain"
            />
          </div>
        </>
      )}

      {/* sliders */}
      <div className="mx-auto mt-2 w-full max-w-xs md:px-4 lg:mx-auto lg:max-w-sm lg:px-6">
        <Slider {...settings}>
          {media.map((image, index) => (
            <div
              key={image.position}
              className={`m-2 ${
                selectedImageIndex === index
                  ? "item-center flex rounded-lg ring-primary ring-offset-2 focus:outline-none [&_img]:ring-1"
                  : ""
              }`}
              onClick={() => {
                if (image.video_content) {
                  setSelectedVideo(image.video_content.video_url);
                  setSelectedImage(null);
                } else {
                  setSelectedImage(image.media_path);
                  setSelectedVideo(null);
                }
                setSelectedImageIndex(index);
              }}
            >
              <div className="group h-full w-full">
                {image.media_type === "external-video" && (
                  <div className="relative">
                    <div className="absolute flex h-11 w-5/6 items-center justify-center rounded-lg bg-black bg-opacity-20 group-hover:cursor-pointer md:h-10 lg:h-12">
                      <FontAwesomeIcon
                        icon={faCirclePlay}
                        className="text-white"
                      />
                    </div>
                  </div>
                )}
                <Image
                  src={image.media_path}
                  alt={`Slide image ${image.media_type}`}
                  width={200}
                  height={200}
                  className="center w-5/6 rounded-lg object-contain ring-primary ring-offset-4 group-hover:cursor-pointer group-hover:ring-1"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
