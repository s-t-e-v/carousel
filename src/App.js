import { useState } from 'react';

const LEFT = "LEFT",
      RIGHT = "RIGHT";

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

function Carousel() {
  const [currentImg, setCurrentImg] = useState(0);

  const images = [
    "mountain.jpg",
    "desert.jpg",
    "moon.jpg",
    "waterfall.jpg",
  ];

  function handleClick(img, side) {

    switch(side) {
      case LEFT:
        if(img > 0)
          img--;
        else
          img = images.length - 1;
        break;
      case RIGHT:
        if(img < images.length - 1)
          img++;
        else
          img = 0;
        break;
      default:
        break;
    }

    setCurrentImg(img);
  }

  return (
    <div className="carousel">
      <Arrowleft onLeftClick={() => handleClick(currentImg, LEFT)}/>
        <div className="slide">
          <img src={require("./img/" + images[currentImg])} alt=""/>
        </div>
      <Arrowright onRightClick={() => handleClick(currentImg, RIGHT)}/>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>Project 1: Carousel</h1>
      <Carousel />
    </div>
  );
}