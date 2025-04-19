import { animals } from "./animals";
import React from "react";

export default function AnimalFun() {
  const title = "";
  const showBackground = true;
  const background = (
    <img className="background" alt="ocean" src="/images/ocean.jpg" />
  );

  function displayFact(e) {
    const animalName = e.target.alt;
    const facts = animals[animalName].facts;
    console.log(facts);
    const randomIndex = Math.floor(Math.random() * facts.length);
    const funFact = facts[randomIndex];

    const factElement = document.getElementById("fact");
    factElement.innerHTML = funFact;
  }
  return (
    <div>
      <h1>{title || "Click an animal for a fun fact"}</h1>
      <p id="fact"></p>
      {showBackground && background}
      <div className="animals">
        {Object.keys(animals).map((animal) => {
          return (
            <div className="animal" key={animal}>
              <h3>{animal}</h3>
              <img
                onClick={displayFact}
                className="animal"
                alt={animal}
                src={animals[animal].image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
