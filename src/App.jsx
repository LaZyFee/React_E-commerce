import React from "react";
import { router } from "./Routes/Router";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
