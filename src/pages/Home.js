import { getData } from "../utils/getData";

export const Home = async () => {
  const products = await getData();

  const view = `
        <div class="products">
            ${products
              .map(
                (product) => `
            <article class="product-card"> 
                <a href="#/${product._id}/">
                    <div class="product-img">
                      <img src="${product.img.url}">
                    </div>
                    <div class="product-info">
                      <p>${product.category}</p>    
                      <h2>${product.name}</h2>  
                    </div>
                </a>
            </article>
            `
              )
              .join("")}
        </div>
    `;

  return view;
};
