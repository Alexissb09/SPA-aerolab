import getData from "../utils/getData";
import getHash from "../utils/getHash";
import { Error404 } from "./Error404";

export const Product = async () => {
  const id = getHash();
  const productData = await getData();
  const product = productData.find((element) => {
    return element._id == id;
  });

  const view = product
    ? `
    <div class="product-details">
          <div class="product-details-img">
            <img src="${product.img.url}">
          </div>
        
          <div class="product-details-info">
            <p>Name: ${product.name}<p>
            <p>Category: ${product.category}<p>
            <p>Cost: $${product.cost}<p>
          <div>
    </div>
  `
    : Error404();

  return view;
};
