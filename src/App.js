
function Arrowleft() {
  return (
    <button className="arrow arrowleft"></button>
  );
}

function Arrowright() {
  return (
    <button className="arrow arrowright"></button>
  );
}

function Carousel() {
  return (
    <>
      <div className="carousel">
        <Arrowleft/>
          <div className="slide">
            <img src={require("./img/mountain.jpg")} alt=""/>
          </div>
        <Arrowright/>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <div className="app">
        <h1>Project 1: Carousel</h1>
        <Carousel />
      </div>
    </>
  );
}