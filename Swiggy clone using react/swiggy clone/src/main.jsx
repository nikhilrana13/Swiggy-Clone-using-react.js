

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Success from './Pages/Success.jsx'
import { ProductContextProvider } from "./Context/ProductContext";
import Search from "./Components/searchbox/search.jsx";
import './App.css'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
      path: ':category?',
      element: <Product />
    },
    {
      path:'/cart',
      element: <Cart />

    },
    {
      path:'/success',
      element: <Success />
    },
    {
      path:"search",
      element: <Search />
  
    }

  
  
  ]
  },

 


])




const root = createRoot(document.getElementById("root"));
root.render(

  <ProductContextProvider>
    <RouterProvider router={router} />
  </ProductContextProvider>

   

  
);
