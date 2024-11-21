import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import ErrorPage from './Error.jsx'
import SignIn from './Components/auth/SignIn.jsx';
import Login from './Components/auth/Login.jsx';
import Home from './Components/Home.jsx';
import Admin from './Components/admin/AdminUpdatePortal.jsx'
import Page from './Components/Pages/page.jsx';
import Wishlist from './Components/wishlist/Wishlist.jsx';
import Cart from './Components/cart/Cart.jsx';
import Contact from './Components/contact/Contact.jsx';
import Explore from './Components/Explore.jsx';
import ExploreAll from './Components/ExploreAll.jsx';
import OtpTaker from './Components/auth/OtpTaker.jsx';
import Inbox from './Components/messages/Inbox.jsx';

import './index.css'
import CheckoutPage from './Components/checkout/CheckoutPage .jsx';
import OrderSuccess from './Components/checkout/OrderSuccess.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      } ,
      {
        path: '/wishlist/:userID',
        element: <Wishlist />
      } ,
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/login',
        element: <Login />
      } ,
      {
        path: '/cart/:userID',
        element: <Cart />
      } ,
      {
        path: '/admin',
        element: <Admin />
      } ,
      {
        path : '/inbox',
        element : <Inbox/>
      },
      {
        path :'/page/:id' , 
        element : <Page/>
      } ,
      {
        path :'/explore/:subCategory' , 
        element : <Explore/>
      } ,
      {
        path :'/exploreAll/:company' , 
        element : <ExploreAll/>
      } ,
      {
        path : '/otp',
        element : <OtpTaker/>
      },
      {
        path : '/contact' ,
        element : <Contact/>
      } , 
      {
        path : '/checkout' ,
        element : <CheckoutPage />
      } ,
      {
        path : '/orderSuccess', 
        element : <OrderSuccess/>
      }
    ],
  } , 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
