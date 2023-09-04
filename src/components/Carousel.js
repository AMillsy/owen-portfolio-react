import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.png";
import React from "react";
import "../styles/Carousel.css";
const Carousel = () => {
  let isDragStart = false,
    prevPageX,
    prevScrollLeft;

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carouselRef.current.scrollLeft;
  };
  const dragStop = () => {
    isDragStart = false;
  };
  function dragging(e) {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
  }
  const carouselRef = React.createRef();
  return (
    <div className="carousel">
      <h3 className="carouselTitle">Title</h3>

      <div
        className="container"
        onMouseMove={(e) => dragging(e)}
        onMouseDown={(e) => dragStart(e)}
        onMouseUp={() => dragStop()}
        ref={carouselRef}
      >
        <button className="carouselButtons left">&lt;</button>
        <img className="carouselImages" src={img1} alt="" />
        <img className="carouselImages" src={img2} alt="" />
        <img className="carouselImages" src={img2} alt="" />
        <img className="carouselImages" src={img2} alt="" />
        <button className="carouselButtons right">&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
