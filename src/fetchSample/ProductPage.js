import React, { useEffect, useState } from "react";
import { apiUrl } from "../env/config";
import ProductListPage from "./ProductListPage";
import AddProduct from "./AddProduct";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(apiUrl + "/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const getProducts = () => {
    fetch(apiUrl + "/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const add = (data) => {
    let requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        unitPrice: data.unitPrice,
        unitsInStock: data.unitsInStock,
      }),
    };

    fetch(apiUrl + "/api/products", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        getProducts();
      });
  };

  const deleteProduct = (id) => {
    let requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    };

    fetch(apiUrl + "/api/products/" + id, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("Silindi");
        getProducts();
      });
  };

  return (
    <>
      <AddProduct addProduct={add} />

      <hr />

      <ProductListPage products={products} deleteProduct={deleteProduct} />
    </>
  );
}

export default ProductPage;
