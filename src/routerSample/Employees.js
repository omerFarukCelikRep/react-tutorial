import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../env/config";

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(apiUrl + "/api/suppliers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmployees(data);
      });
  }, []);

  return (
    <>
      <h1>Employees</h1>
      <ul>
        {employees &&
          employees.map((item, key) => {
            return (
              <li key={key}>
                <Link to={"/employees/" + item.id}>{item.companyName}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Employees;
