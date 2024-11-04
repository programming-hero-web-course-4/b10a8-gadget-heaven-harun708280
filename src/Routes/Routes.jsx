import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import LayOut from "../Layout/LayOut";
import Home from "../Component/Home/Home";
import Product from "../Component/Product/Product";
import ProductDetails from "../Component/ProductDetails/ProductDetails";
import Dashboard from "../Component/Dashboard/Dashboard";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch(`../Category.json`),
            children:[
                {
                    path:'/',
                    element:<Product></Product>,
                    loader:()=>fetch(`../product.json`),
                },
                {
                    path:'/category/:name',
                    element:<Product></Product>,
                    loader:()=>fetch(`../product.json`),
                }
            ]
        },
        {
            path:'/productDetails/:name',
            element:<ProductDetails></ProductDetails>,
            loader:()=>fetch(`../product.json`),
        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>

        }
      ]
    },
  ]);

export {router}