import { useState } from 'react';

const images = [
  "mountain.jpg",
  "desert.jpg",
  "moon.jpg",
  "waterfall.jpg",
];

export default function App() {

  const [currentImg, setCurrentImg] = useState(0);

  function nextSlide() {
    setCurrentImg(currentImg === images.length - 1? 0 : currentImg + 1);
  }

  function prevSlide() {
    setCurrentImg(currentImg === 0? images.length - 1 : currentImg - 1);
  }

  return (
    <div className="app">
      <h1>Project 1: Carousel</h1>
        <div className="carousel">
          <button className="arrow arrowleft" onClick={prevSlide}></button>
          <div className="slide">
            <img src={require("./img/" + images[currentImg])} alt=""/>
          </div>
          <button className="arrow arrowright" onClick={nextSlide}></button>
      </div>
    </div>
  );
}