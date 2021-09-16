import React, { useEffect, useState } from "react";
import { apiUrl } from "../env/config";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl + "/api/customers")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setCustomers(data);
          setLoading(false);
        }, 1500);
      });
  }, []);

  const deleteCustomer = (id) => {
    let result = window.confirm("Silmek İstediğinize Emin Misiniz?");

    if (result) {
      console.log("Silme İşlemi Yapıldı");
    } else {
      //Else Condition
    }
  };

  return (
    <>
      {loading == true ? <span>loading...</span> : <></>}
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.companyName}</td>
                <td>
                  <button onClick={() => deleteCustomer(item.id)}>
                    Delete
                  </button>
                  {/* <button onClick={() => {if(window.confirm("Silmek İstediğinize Emin Misiniz?")) deleteCustomer(item.id)}}>Delete</button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CustomerList;
