import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.png";
import { createRef, useRef, useState, useLayoutEffect } from "react";
import "../styles/Carousel.css";
const Carousel = () => {
  let isDragStart = false,
    prevPageX,
    prevScrollLeft;

  const carouselRef = createRef(null);
  let firstImageRef = useRef(null);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(firstImageRef.offsetWidth);
  });

  const dragStart = (e) => {
    carouselRef.current.style.scrollBehavior = "auto";
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carouselRef.current.scrollLeft;
  };
  const dragStop = () => {
    isDragStart = false;
    carouselRef.current.style.scrollBehavior = "smooth";
  };
  function dragging(e) {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
  }

  const moveCarousel = (e) => {
    const isLeft = e.target.classList.contains("left");

    if (isLeft) {
      carouselRef.current.scrollLeft -= width;
      return console.log("This is left");
    }
    carouselRef.current.scrollLeft += width;
    return console.log("This is right");
  };

  return (
    <div className="carousel">
      <h3 className="carouselTitle">Models</h3>

      <div
        className="container"
        onMouseMove={(e) => dragging(e)}
        onMouseDown={(e) => dragStart(e)}
        onMouseUp={() => dragStop()}
        ref={carouselRef}
      >
        <button
          className="carouselButtons left"
          onClick={(e) => moveCarousel(e)}
        >
          &lt;
        </button>
        <img
          className="carouselImages"
          src={img1}
          alt=""
          ref={(e) => (firstImageRef = e)}
        />
        <img ref={firstImageRef} className="carouselImages" src={img2} alt="" />
        <img className="carouselImages" src={img2} alt="" />
        <img className="carouselImages" src={img2} alt="" />
        <img className="carouselImages" src={img2} alt="" />
        <img className="carouselImages" src={img2} alt="" />
        <img className="carouselImages" src={img2} alt="" />
        <img className="carouselImages" src={img2} alt="" />
        <button
          className="carouselButtons right"
          onClick={(e) => moveCarousel(e)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
