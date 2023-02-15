import Next from "../../assets/images/icon-next.svg";
import Previous from "../../assets/images/icon-previous.svg";
import classNames from "classnames";

import "./ProductImage.css";

function ProductImage({ Images, setLightBox, activeImage, setActiveImage }) {
  const nextImage = () => {
    if (activeImage !== Images.length - 1) {
      setActiveImage(activeImage + 1);
    } else {
      setActiveImage(0);
    }
  };

  const previousImage = () => {
    if (activeImage !== 0) {
      setActiveImage(activeImage - 1);
    } else {
      setActiveImage(3);
    }
  };

  return (
    <>
      <div className="product-image">
        <img className="image" onClick={() => setLightBox(true)} src={Images[activeImage].url} alt="" />
        <div className="thumbnails">
          {Images.map((image) => (
            <div
              key={image.id}
              onClick={() => setActiveImage(image.id)}
              className={classNames({
                "thumbnail": true,
                "opacity-40 !outline-orange": activeImage === image.id,
              })}
            >
              <img className="w-[5.5rem] rounded-lg" src={image.thumbnail} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="mobile-slider">
        <img className="image" src={Images[activeImage].url} alt="" />
        <button onClick={nextImage} className="next-button">
          <img src={Next} alt="Next Icon" />
        </button>
        <button onClick={previousImage} className="previous-button">
          <img src={Previous} alt="Previous Icon" />
        </button>
      </div>
    </>
  );
}

export default ProductImage;
