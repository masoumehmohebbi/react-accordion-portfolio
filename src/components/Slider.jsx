import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../assets/images/slide1.jpg";
import image2 from "../assets/images/slide2.jpg";
import image3 from "../assets/images/slide3.jpg";

function Slider() {
  return (
    <section className="mt-7">
      <AliceCarousel>
        <img
          src={image1}
          className="w-[400px] h-[400px] border border-primary"
          alt=""
        />

        <img
          src={image2}
          className="w-[400px] h-[400px] border border-primary"
          alt=""
        />

        <img
          src={image3}
          className="w-[400px] h-[400px] border border-primary"
          alt=""
        />
      </AliceCarousel>
    </section>
  );
}

export default Slider;
