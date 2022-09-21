import getData from "../utils/getData";
import getHash from "../utils/getHash";
import { Error404 } from "./Error404";

export const Product = async () => {

  const id = getHash()
  const productData = await getData()
  console.log(id)
  const product = productData.find((element) => {
    return element._id == id;
  });

  const view = product
    ? `
    <div>
        <article class="product-details-img">
          <img src="${product.img.url}">
        
          <div class="product-details">
            <p>Name: ${product.name}<p>
            <p>Category: ${product.category}<p>
            <p>Cost: $${product.name}<p>
          <div>
        </article>
    </div>
  `
    : Error404();

  return view;
};
