import { FC } from "react";
import GallerySlider from "./GallerySlider";
import styles from "./Gallery.module.scss";
import Layout from "@/components/layout/Layout";
import GalleryCarousel from "./GallerySlider";
const Gallery: FC = () => {
  const images: string[] = [
    "/slides/slide1.jpeg",
    "/slides/slide2.jpeg",
    "/slides/slide3.jpeg",
    "/slides/slide4.png",
    "/slides/slide5.jpeg",
    "/slides/slide6.jpeg",
    "/slides/slide7.png",
    "/slides/slide8.jpeg",
    "/slides/slide9.jpg",
    "/slides/slide10.jpg",
    "/slides/slide11.jpeg",
    "/slides/slide12.jpg",
    "/slides/slide13.jpeg",
    "/slides/slide14.png",
    "/slides/slide15.jpeg",
    "/slides/slide16.jpeg",
    "/slides/slide17.jpeg",
    "/slides/slide18.png",
    "/slides/slide19.jpg",
    "/slides/slide20.jpeg",
    "/slides/slide21.jpeg",
    "/slides/slide22.jpg",
  ];

  return (
    <Layout>
      <div className={styles.gallery}>
        <div>
          <GallerySlider images={images} />
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
