import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import Cart from './components/Cart/Cart.jsx';
import Orders from './components/Orders/Orders.jsx';
import cartProductLoader from './Loaders/CartProductsLoader.js';
import Checkout from './components/Checkout/Checkout.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<Shop/>
      },
      {
        path:"/orders",
        element:<Orders/>,
        loader:cartProductLoader,
      },
      {
        path:"/inventory",
        element:<Inventory/>
      },
      {
        path:"/checkout",
        element:<Checkout></Checkout>
      },
      {
        path:"/login",
        element:<Login/>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
