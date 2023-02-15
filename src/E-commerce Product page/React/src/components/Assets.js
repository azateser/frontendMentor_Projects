import MainImage1 from "../assets/images/image-product-1.jpg";
import MainImage2 from "../assets/images/image-product-2.jpg";
import MainImage3 from "../assets/images/image-product-3.jpg";
import MainImage4 from "../assets/images/image-product-4.jpg";

import Thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import LightBox from "./LightBox/LightBox";
import ProductDetail from "./Product/ProductDetail";
import ProductImage from "./Product/ProductImage";

const Images = [
  {
    id: 0,
    url: MainImage1,
    thumbnail: Thumbnail1,
  },
  {
    id: 1,
    url: MainImage2,
    thumbnail: Thumbnail2,
  },
  {
    id: 2,
    url: MainImage3,
    thumbnail: Thumbnail3,
  },
  {
    id: 3,
    url: MainImage4,
    thumbnail: Thumbnail4,
  },
];

export { Images, MainImage1, MainImage2, MainImage3, MainImage4, Thumbnail1, Thumbnail2, Thumbnail3, Thumbnail4, LightBox, ProductDetail, ProductImage };
