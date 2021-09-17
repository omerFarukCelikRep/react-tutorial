import { Button } from "antd";
import React, { useContext } from "react";
import cartContext from "../store/context/CartContext";

function CartDetails() {
  let { cart, setCart } = useContext(cartContext);

  let totalPrice = 0;

  if (cart != null) {
    cart.cartDetails.map((item, key) => {
      totalPrice = totalPrice + item.quantity * item.unitPrice;
    });
  }

  const emptyCart = () => {
    setCart(null);
  };

  const removeProduct = (id) => {
    let newCartDetails = cart.cartDetails.filter((q) => q.productId != id);
    cart.cartDetails = newCartDetails;
    cart.productQuantity = cart.productQuantity - 1;

    setCart({ ...cart });
  };

  return (
    <>
      <div>
        <span>Toplam Ürün : {cart && cart.productQuantity}</span>
        <span>Toplam Fiyat : {totalPrice}</span>
        <hr />
        {cart &&
          cart.cartDetails.map((item, key) => {
            return (
              <div key={key}>
                <div>
                  <span>Name : {item.name}</span>
                  <span>
                    {item.unitPrice} * {item.quantity}
                  </span>
                  <span> = {item.unitPrice * item.quantity}</span>
                </div>
                <div>
                    <Button danger onClick={() => removeProduct(item.productId)}>Remove</Button>
                    </div>
              </div>
            );
          })}
        <div>
          <Button danger onClick={() => emptyCart()}>
            Empty Cart
          </Button>
        </div>
      </div>
    </>
  );
}

export default CartDetails;
