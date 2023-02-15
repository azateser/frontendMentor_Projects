import Plus from "../../assets/images/icon-plus.svg";
import Minus from "../../assets/images/icon-minus.svg";

import "./ProductDetail.css";
import { useState } from "react";

const Product = {
  name: "Fall Limited Edition Sneakers",
  subtitle: "SNEAKER COMPANY",
  description: "These ow-profile sneakers are vour bertect casual wear companion. reaturing a durable rubber outer sole, they I withstand everything the weather can offer.",
  price: "125.000",
  discount: 50,
  oldPrice: "250.000",
};

function ProductDetail({ cart, setCart }) {
  const { name, subtitle, description, price, discount, oldPrice } = Product;

  const [productCount, setProductCount] = useState(1);

  return (
    <div className="product-detail">
      <div className="info">
        <h4>{subtitle}</h4>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className="price-area">
        <div className="new-price">
          <div className="price">${price}</div>
          <div className="discount">{discount}%</div>
        </div>
        <div className="old-price">${oldPrice}</div>
      </div>
      <div className="actions">
        <div className="amonut">
          <button disabled={productCount === 0} onClick={() => (productCount === 0 ? setProductCount(productCount) : setProductCount(productCount - 1))} className="minus">
            <img src={Minus} alt="Minus" />
          </button>
          <span className="count">{productCount}</span>
          <button onClick={() => setProductCount(productCount + 1)} className="plus">
            <img src={Plus} alt="Plus" />
          </button>
        </div>
        <button
          onClick={() =>
            setCart({
              name: Product.name,
              price: Product.price,
              count: productCount,
            })
          }
          disabled={productCount === 0}
          className="add-to-card"
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fillRule="nonzero" />
          </svg>
          <span>Add to card</span>
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
