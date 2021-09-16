import React, { useState } from "react";

function StateInputArraySample() {

    let countryData = ['Turkey', 'Brasil', 'Germany', 'Canada','UK'];
  const [countries, setCountries] = useState(countryData);

  const removeCountry = (key) => {
    countries.splice(key,1);

    setCountries([...countries]);
  }

  return (
    <>
      <ul>
          {
              countries.map((item,key) => (
                  <li key={key} onClick={() => {
                      removeCountry(key)
                  }}>{item}</li>
              ))
          }
      </ul>
    </>
  );
}

export default StateInputArraySample;
