import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  useEffect(() => {
    const _intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setIntervalId(_intervalId);
    return () => {
      clearInterval(_intervalId);
    };
  }, []);

  useEffect(() => {
    console.log("Time updated:", time);
    if (time >= Number(name)) {
      // alert("Time is equal to name!");
      console.log("Time is equal to name!");
      clearInterval(intervalId);
    }
  }, [time]); // dependency array

  const [name, setName] = useState(5); // limit

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} type="text" />
    </>
  );
}
