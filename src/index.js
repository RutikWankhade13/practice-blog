import ReactDom from "react-dom/client";

import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Home from "./views/Home/Home";

import BlogView from "./views/BlogView/BlogView";

const root = ReactDom.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/blog/:id",
    element: <BlogView/>
  }
]);

root.render(<RouterProvider router={router}/> );