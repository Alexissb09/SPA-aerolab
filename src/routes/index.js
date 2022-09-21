import Header from "../templates/Header";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Error404 } from "../pages/Error404";
import Nav from "../templates/Nav";

import getHash from "../utils/getHash";
import resolveRoutes from "../utils/getResolveRoutes";

const routes = {
  "/": Home,
  "/:id": Product,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const nav = null || document.getElementById("Nav");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
  // nav.innerHTML = await Nav();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};  

export default router;
