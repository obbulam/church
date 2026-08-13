import React from "react";
import { versOfDay } from "../data/data";

function Verse() {
  const [index, setIndex] = React.useState(
    Math.floor(Math.random() * versOfDay.length),
  );

  const nextVerse = () => {
    setIndex((prev) => (prev + 1) % versOfDay.length);
  };

  const prevVerse = () => {
    setIndex((prev) => (prev === 0 ? versOfDay.length - 1 : prev - 1));
  };

  return (
    <div className="verse-container">
      <button onClick={prevVerse} className="arrow">
        ‹
      </button>

      <div className="verse-content">
        <p>{versOfDay[index].article}</p>
        <small>{versOfDay[index].small}</small>
      </div>

      <button onClick={nextVerse} className="arrow">
        ›
      </button>
    </div>
  );
}

export default Verse;
