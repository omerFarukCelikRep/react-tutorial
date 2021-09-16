import React, { useState } from "react";

function StateSample2() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("Ömer Faruk");

  const getData = () => {
    setLoading(true);

    setTimeout(() => {
      setUsername("Ömer Faruk ÇELİK");
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      {loading == true ? (
        <span>loading...</span>
      ) : (
        <>
          <h1>{username}</h1>
          <button onClick={() => getData()}>Get Username</button>
        </>
      )}
    </>
  );
}

export default StateSample2;
