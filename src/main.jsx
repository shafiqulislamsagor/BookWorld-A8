import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home'; 
import Error from './components/Error';
import MainHome from './page/MainHome';
import CardPage from './page/CardPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path:'/',
        element:<MainHome/>,
        errorElement:<Error/>,
        loader: ()=> fetch('/data.json'),
      },
      {
        path: '/card/:id',
        element:<CardPage/>,
        loader: ()=> fetch(`/data.json`),
        errorElement:<Error/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
