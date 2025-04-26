import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AddThoughtForm } from "./component/AddThoughtForm";
import { Thought } from "./component/Thought";
import { generateId, getNewExpirationTime } from "./component/utilities";

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (text) => {
    const newThought = {
      id: generateId(),
      text,
      expiresAt: getNewExpirationTime(),
    };
    if (text.length > 0) {
      setThoughts((prevThoughts) => [newThought, ...prevThoughts]);
    }
  };
  const removeThought = (id) => {
    setThoughts((prevThoughts) => prevThoughts.filter((thought) => thought.id !== id));
  };


  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => {
            console.log(thought); // Check the structure of thought
            return (
              <Thought
                key={thought.id}
                thought={thought}
                removeThought={removeThought}
              />
            );
          })}
        </ul>
      </main>
    </div>
  );
}
