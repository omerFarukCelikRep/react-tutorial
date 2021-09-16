import React, { useState } from "react";

function AddProduct(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const add = () => {
    let newProduct = {
      name: name,
      unitPrice: price,
      unitsInStock: stock,
    };

    props.addProduct(newProduct);
  };

  return (
    <>
      <div>
        <label>Name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Price :</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Stock :</label>
        <input
          type="text"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => add()}>Add</button>
      </div>
    </>
  );
}

export default AddProduct;
