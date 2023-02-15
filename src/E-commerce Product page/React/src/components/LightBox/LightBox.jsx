import React, { useState } from "react";
import classNames from "classnames";

import "./LightBox.css";

function LightBox({ images, activeImage, setLightBox }) {
  const [activeBox, setActiveBox] = useState(activeImage);

  const nextImage = () => {
    if (activeBox !== images.length - 1) {
      setActiveBox(activeBox + 1);
    } else {
      setActiveBox(0);
    }
  };

  const previousImage = () => {
    if (activeBox !== 0) {
      setActiveBox(activeBox - 1);
    } else {
      setActiveBox(3);
    }
  };

  return (
    <div className="light-box">
      <div className="black-area" onClick={() => setLightBox(false)}></div>
      <div className="content">
        <div onClick={() => setLightBox(false)} className="close">
          <svg className="scale-125" width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
          </svg>
        </div>
        <div className="main-image">
          <img src={images[activeBox].url} alt="mainImage" />
          <button onClick={nextImage} className="next-button">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd" />
            </svg>
          </button>
          <button onClick={previousImage} className="previous-button">
            <svg className="translate-x-[-2px]" width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="thumbnails">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setActiveBox(image.id)}
              className={classNames({
                thumbnail: true,
                "opacity-40 !outline-orange": activeBox === image.id,
              })}
            >
              <img className="w-[5.5rem] rounded-xl" src={image.thumbnail} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LightBox;
