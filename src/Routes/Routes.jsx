import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import LayOut from "../Layout/LayOut";
import Home from "../Component/Home/Home";
import Product from "../Component/Product/Product";
import ProductDetails from "../Component/ProductDetails/ProductDetails";
import Dashboard from "../Component/Dashboard/Dashboard";
import Statistics from "../Component/Statistics/Statistics";
import About from "../Component/About/About";
import Error from "../Component/Common/Error";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      errorElement:<Error></Error>,
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
            element:(<div className="h-[800px]">
              <ProductDetails></ProductDetails>
            </div>),
            loader:()=>fetch(`../product.json`),
        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>

        },
        {
          path:'/Statistics',
          element:<Statistics></Statistics>,
          loader:()=>fetch(`../product.json`)
        },
        {
          path:'/about',
          element:<About></About>,
          loader:()=>fetch(`../Store.json`)
        }
      ]
    },
  ]);

export {router}