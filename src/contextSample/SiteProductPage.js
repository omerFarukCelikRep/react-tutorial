import { Button, Card, Row, Col } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { apiUrl } from "../env/config";
import cartContext from "../store/context/CartContext";
import CartDetails from "./CartDetails";

const { Meta } = Card;

function SiteProductPage() {
  let { cart, setCart } = useContext(cartContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch(apiUrl + "/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const addCart = (item) => {
    if (cart == null) {
      let newCart = {
        productQuantity: 1,
        userId: 1,
        cartDetails: [
          {
            productId: item.id,
            name:item.name,
            unitPrice: item.unitPrice,
            quantity: 1,
          },
        ]
      };

      setCart(newCart);
    } else {
      let hasProduct = cart.cartDetails.find(q => q.productId == item.id);

      if (hasProduct == undefined) {
        cart.productQuantity = cart.productQuantity + 1;

        let newCartProduct = {
          productId: item.id,
          name:item.name,
          unitPrice: item.unitPrice,
          quantity: 1,
        };

        cart.cartDetails.push(newCartProduct);
      } else {
        hasProduct.quantity = hasProduct.quantity + 1;
      }


      setCart({...cart});
    }
  };

  let cartSample = {
    productQuantity: 2,
    userId: 5,
    products: [
      {
        productId: 5,
        unitPrice: 200,
        quantity: 1,
      },
      {
        productId: 6,
        unitPrice: 400,
        quantity: 2,
      },
    ],
  };

  return (
    <>
      <CartDetails />
      <Row gutter={16}>
        {products &&
          products.map((item, key) => {
            return (
              <Col span={8} style={{ marginBottom: 20 }}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-red-select-2020?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604343707000"
                    />
                  }
                >
                  <Meta title={item.name} description={item.quantityPerUnit} />
                  <p>Id : {item.id}</p>
                  <span>Price : {item.unitPrice}</span>
                  <br />
                  <Button
                    onClick={() => addCart(item)}
                    style={{ marginTop: 5 }}
                    type="primary"
                  >
                    Add to Cart
                  </Button>
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
}

export default SiteProductPage;
