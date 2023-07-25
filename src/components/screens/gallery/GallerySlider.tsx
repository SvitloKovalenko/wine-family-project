import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

interface GallerySliderProps {
  images: string[];
}

const GallerySlider: React.FC<GallerySliderProps> = ({ images }) => {
  const glideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (glideRef.current) {
      new Glide(".glide", {
        type: "carousel",
        perView: 3,
        focusAt: "center",
        autoplay: 2000,
        gap: 5,
        breakpoints: {
          768: {
            perView: 1,
          },
          1024: {
            perView: 3,
          },
        },
      }).mount();
    }
  }, [images]);

  return (
    <div className='glide' ref={glideRef}>
      <div className='glide__track' data-glide-el='track'>
        <ul className='glide__slides'>
          {images.map((image, index) => (
            <li key={index} className='glide__slide'>
              <img src={image} alt={`Image ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
      <div className='glide__arrows' data-glide-el='controls'>
        <button className='glide__arrow glide__arrow--left' data-glide-dir='<'>
          &#60;
        </button>
        <button className='glide__arrow glide__arrow--right' data-glide-dir='>'>
          &#62;
        </button>
      </div>
    </div>
  );
};

export default GallerySlider;
