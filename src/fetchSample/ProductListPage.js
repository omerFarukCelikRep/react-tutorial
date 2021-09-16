import React from "react";

function ProductListPage(props) {
  let { products, deleteProduct } = props;

  return (
    <>
      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Price</td>
          <td>Units In Stock</td>
          <td></td>
        </tr>
        {products.map((item, key) => {
          return (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.unitPrice}</td>
              <td>{item.unitsInStock}</td>
              <td>
                <button onClick={() => deleteProduct(item.id)} >Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default ProductListPage;
