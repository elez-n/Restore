import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Homepage from "../../features/homepage/Homepage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import About from "../../features/about/About";
import Contact from "../../features/contact/Contact";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '', element: <Homepage/>},
      {path: '/catalog', element: <Catalog/>},
      {path: '/catalog/:id', element: <ProductDetails/>},
      {path: '/about', element: <About/>},
      {path: '/contact', element: <Contact/>},
    ]
  }
], {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
})