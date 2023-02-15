import React, { useState } from "react";
import * as P from "./Assets.js";
import "./Product.css";

function ProductPage({ cart, setCart }) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightBox, setLightBox] = useState(false);

  return (
    <React.Fragment>
      {lightBox && <P.LightBox images={P.Images} activeImage={activeImage} setLightBox={setLightBox} />}
      <div className="product">
        <P.ProductImage Images={P.Images} setLightBox={setLightBox} activeImage={activeImage} setActiveImage={setActiveImage} />
        <P.ProductDetail cart={cart} setCart={setCart} />
      </div>
    </React.Fragment>
  );
}

export default ProductPage;
