import React, { useState } from "react";

function StateInputArraySample() {
  let metals = ["Iron Maiden", "In Flames", "All Good Things"];
  const [metalGroups, setMetalGroups] = useState(metals);

  const [name, setName] = useState('...')

  const addMetal = () => {
    setMetalGroups([...metalGroups, name])
  }

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => addMetal()}>Add</button>
      <ul>
        {metalGroups.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default StateInputArraySample;
