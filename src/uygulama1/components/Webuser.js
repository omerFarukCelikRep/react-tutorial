import React, { useState } from "react";
import WebuserDetails from "./WebuserDetails";
import WebuserPoints from "./WebuserPoints";

function Webuser() {
  const [avgPoint, setAvgPoint] = useState(0);

  let points = [46, 54, 98, 62, 35, 55];

  let user = {
    name: "Ömer Faruk",
    surname: "Çelik",
    city: "Istanbul",
    country: "Türkiye",
  };

  const calc = () => {
    var sum = 0;

    for (let i = 0; i < points.length; i++) {
      sum += points[i];
    }

    var avg = sum / points.length;

    setAvgPoint(avg);
  };

  return (
    <>
      <WebuserPoints points={points} />
      <WebuserDetails user={user} calc={calc} />
    </>
  );
}

export default Webuser;
