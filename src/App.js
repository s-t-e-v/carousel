
function Arrowleft() {
  return (
    <button className="arrow arrowleft">
      arrowleft
    </button>
  );
}

function Arrowright() {
  return (
    <button className="arrow arrowright">
      arrowright
    </button>
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
      <h1>Hello World!</h1>
      <Carousel />
    </>
  );
}