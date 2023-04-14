
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
      <Arrowleft/>
      <div className="carousel">
        carousel
      </div>
      <Arrowright/>
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