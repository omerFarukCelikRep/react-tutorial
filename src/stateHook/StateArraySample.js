import React, { useState } from "react";

function StateArraySample() {
  const [dates, setDates] = useState([]);

  const add = () => {
    setDates([...dates, Date.now()]);
  };

  return (
    <>
      <button onClick={() => add()}>Add Date</button>
      <ul>
        {
        dates.map((item, key) => {
          <li key={key}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default StateArraySample;
