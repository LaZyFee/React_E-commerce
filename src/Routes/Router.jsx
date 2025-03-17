import { ProductDetails } from "@/components/Home/ProductDetails";
import { Home } from "@/components/Pages/Home";
import { MainLayouts } from "@/Layouts/MainLayouts";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
