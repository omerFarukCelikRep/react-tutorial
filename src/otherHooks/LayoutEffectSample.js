import React, { useEffect, useLayoutEffect, useState } from "react";

function LayoutEffectSample() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(2);
  });

  useLayoutEffect(async () => {
    setCounter(4);
  }, []);
  return (
    <>
      <h1> Counter : {counter}</h1>
    </>
  );
}

export default LayoutEffectSample;
