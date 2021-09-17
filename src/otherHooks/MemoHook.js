import React, { useState } from "react";
import MemoHook2 from "./MemoHook2";

function MemoHook() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <MemoHook2 />
    </>
  );
}

export default MemoHook;
