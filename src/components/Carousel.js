import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.png";
import "../styles/Carousel.css";
const Carousel = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <h3>Title</h3>
      <div>
        <img className="carouselImages" src={img1}></img>
        <img className="carouselImages" src={img2} />
      </div>
    </div>
  );
};

export default Carousel;
