import { useState } from 'react';

const images = [
  "mountain.jpg",
  "desert.jpg",
  "moon.jpg",
  "waterfall.jpg",
];
      

function Arrowleft({onLeftClick}) {
  return (
    <button className="arrow arrowleft" onClick={onLeftClick}></button>
  );
}

function Arrowright({onRightClick}) {
  return (
    <button className="arrow arrowright" onClick={onRightClick}></button>
  );
}


export default function App() {

  const [currentImg, setCurrentImg] = useState(0);

  function prevSlide() {
    setCurrentImg(currentImg === 0? images.length - 1 : currentImg - 1);
  }

  function nextSlide() {
    setCurrentImg(currentImg === images.length - 1? 0 : currentImg + 1);
  }

  return (
    <div className="app">
      <h1>Project 1: Carousel</h1>
        <div className="carousel">
          <Arrowleft onLeftClick={prevSlide}/>
          <div className="slide">
            <img src={require("./img/" + images[currentImg])} alt=""/>
          </div>
          <Arrowright onRightClick={nextSlide}/>
      </div>
    </div>
  );
}