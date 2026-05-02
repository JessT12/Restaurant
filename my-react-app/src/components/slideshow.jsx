import "./slideshow.css";
import { useState } from "react";

function Slideshow({ slides }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow-container">

      {/* Slide */}
      <div className="slide fade">
        <div className="numbertext">
          {index + 1} / {slides.length}
        </div>

        <img src={slides[index]} alt="slide" />

      </div>

      {/* Buttons */}
      <a className="prev" onClick={prevSlide}>❮</a>
      <a className="next" onClick={nextSlide}>❯</a>

      {/* Dots */}
      <div style={{ textAlign: "center" }}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </div>
  );
}

export default Slideshow;