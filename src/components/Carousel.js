import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.png";
import "../styles/Carousel.css";
const Carousel = () => {
  return (
    <div>
      <h3 className="carouselTitle">Title</h3>
      <div className="carousel">
        <div className="carouselImages">
          <img src={img1}></img>
        </div>
        <img className="carouselImages" src={img2} />
      </div>
    </div>
  );
};

export default Carousel;
