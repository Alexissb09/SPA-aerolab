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
            <img src="${product.img.hdUrl}">
        
          <div>
            <p><strong>Name:</strong> ${product.name}<p>
            <p><strong>Category:</strong> ${product.category}<p>
            <p><strong>Cost:</strong> $${product.cost}<p>
          <div>
    </div>
  `
    : Error404();

  return view;
};
