import React, { useState } from "react";

function StateSample() {
  console.log("State sample component render!!!");

  const [country, setCountry] = useState("USA");

  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{country}</h1>
      <button onClick={() => setCountry("Russia")}>Change Country</button>

      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
}

export default StateSample;
