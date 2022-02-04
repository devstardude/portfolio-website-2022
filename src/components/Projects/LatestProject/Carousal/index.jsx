import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import pic1 from "../../../assets/visite/landing.png";
import pic2 from "../../../assets/visite/users.png";
import pic3 from "../../../assets/visite/profile.png";
import pic4 from "../../../assets/visite/add-place.png";
import pic5 from "../../../assets/visite/global-post.png";
import pic6 from "../../../assets/visite/global-zone.png";
import "./style.css";

const images = [
  { src: pic1 },
  { src: pic2 },
  { src: pic3 },
  { src: pic4 },
  { src: pic5 },
  { src: pic6 },
];

const Carousal = (props) => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            arrows: "slider",
          }}
          hasSliderWrapper
          hasAutoplayProgress
        >
          {images.map((slide) => (
            <SplideSlide className="object-cover w-full h-full" key={slide.src}>
              <img
                className="object-cover w-full "
                src={slide.src}
                alt={slide.alt}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </React.Fragment>
  );
};

export default Carousal;
