import React, { useState } from "react";

function Value() {
  const [x, setX] = useState(0);

  const [numbers, setNumbers] = useState([]);

  const [numbersLength, setNumbersLength] = useState(0);

  const addNumber = () => {
    if (isNaN(x)) {
      alert("Lütfen bir sayı giriniz");
    } else {
      let y = x * 1.18;
      setNumbers([...numbers, y]);
      setNumbersLength(numbers.length + 1);
    }
  };

  return (
    <>
      <p>{numbersLength}</p>
      <input
        type="text"
        value={x}
        onChange={(e) => setX(e.target.value)}
      ></input>
      <button>KDV Hesapla</button>

      <ul>
        {numbers.map((item, key) => (
          <li key={key}>{item.toFixed(2)}</li>
        ))}
      </ul>
    </>
  );
}

export default Value;
