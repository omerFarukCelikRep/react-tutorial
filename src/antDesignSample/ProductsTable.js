import React, { useEffect, useState } from "react";
import { apiUrl } from "../env/config";
import { Table, Button } from "antd";
import { baseService } from "../services/BaseService";

function ProductsTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    baseService.get("api/products").then((data) => {
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

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Unit Price",
      dataIndex: "unitPrice",
      key: "unitPrice",
      sorter: (a, b) => a.unitPrice - b.unitPrice,
    },
    {
      title: "Quantity Per Unit",
      dataIndex: "quantityPerUnit",
      key: "quantityPerUnit",
    },
    {
      title: "Delete",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Button danger onClick={() => deleteProduct(id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={products}
        columns={columns}
        pagination={{ defaultPageSize: 5 }}
      />
    </>
  );
}

export default ProductsTable;
