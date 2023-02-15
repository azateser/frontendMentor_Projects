import React from "react";

import image from "../../assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../../assets/images/icon-delete.svg";

function Cart({ cart, setCart }) {
  return (
    <div className="absolute md:top-16 top-16 left-6 z-30 md:-left-48 md:w-[22rem] w-[90%] rounded-lg bg-white text-very-dark-blue shadow-2xl">
      <div className="border-b border-grayish-blue/50 px-6 py-4 font-bold">Cart</div>
      {cart ? (
        <div className="flex flex-col py-4 px-6 font-bold text-dark-grayish-blue">
          <div className="flex items-center justify-between">
            <div>
              <img className="w-14 rounded-md" src={image} alt="" />
            </div>
            <div className="font-normal">
              <h3>{cart?.name}</h3>
              <div className="mt-1 flex gap-2 text-sm">
                <span>
                  ${cart?.price} x {cart?.count}
                </span>
                <span className="font-bold">${Number(cart.price) * Number(cart.count)}.000</span>
              </div>
            </div>
            <div className="flex cursor-pointer" onClick={() => setCart()}>
              <img src={DeleteIcon} alt="" />
            </div>
          </div>
          <div className="mt-4 flex w-full items-center justify-center rounded-xl bg-orange py-4 text-white cursor-pointer">Checkout</div>
        </div>
      ) : (
        <div className="flex items-center justify-center py-20 px-4 font-bold text-dark-grayish-blue">Your cart is empty.</div>
      )}
    </div>
  );
}

export default Cart;
