import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './Components/Home';
import Banner from './Components/Banner';
import Alltsp from './Components/Alltsp';
import Addtsp from './Components/Addtsp';
import AuthProvider from './Providers/AuthProvider';
import Login from './Sequrity/Login';
import Signup from './Sequrity/Signup';
import Mylistpage from './Components/Mylistpage';
import Update from './Components/Update';
import Error from './Components/Error';
import PrivateRoute from './Providers/PrivateRoute';
import Viewdetailspage from './Components/Viewdetailspage';
import CardUn from './Components/CardUn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children:([
      {
        path:"/",
        element:<Banner></Banner>,
        loader:()=>fetch(`https://travelo-server-eta.vercel.app/spots`)

      },
     {
      path:"/Con/:Country",
      element:<CardUn></CardUn>
     },
      {
        path:'/loginn',
        element:<Login></Login>,
      },
      {
        path:'/signup',
        element:<Signup></Signup>,
      },
      {
        path:'/viewdetails/:id',
        element:<Viewdetailspage></Viewdetailspage>,
        loader:({params})=>fetch(`https://travelo-server-eta.vercel.app/spots/${params.id}`)
      },
    
      {
        path:'/alltsp',
        element:<Alltsp></Alltsp>,
        loader:()=>fetch(`https://travelo-server-eta.vercel.app/spots`)
      },
      {
        path:'/addtsp',
        element:<PrivateRoute><Addtsp></Addtsp></PrivateRoute>
      },
      {
        path:'/mylistpage',
        element:<PrivateRoute><Mylistpage></Mylistpage></PrivateRoute>,
        loader:()=>fetch(`https://travelo-server-eta.vercel.app/spots`)
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://travelo-server-eta.vercel.app/spots/${params.id}`)
      },
      
    ])
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router}></RouterProvider>
</AuthProvider>

  </React.StrictMode>,
)
