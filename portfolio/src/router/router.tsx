import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../views/about";

import ProductListing from "../views/ProductListing";
import SoilAnalysis from "../views/SoilAnalysis";
import Streami from "../views/Streami";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/ProductListing", // Corrected path
    element: <ProductListing />,
  },
  {
    path: "/SoilAnalysis", // Corrected path
    element: <SoilAnalysis />,
  },
  {
    path: "/Streami", // Corrected path
    element: <Streami />,
  },
]);

export default Router;
