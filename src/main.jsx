import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./styles.css";
import Home from './pages/Home.jsx';
import Trending from './pages/Trending.jsx';
import Saved from './pages/Saved.jsx';
import Crypto from './pages/Crypto.jsx';
import Live from './components/Live.jsx';
import LivePage from './pages/LivePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path:"/",
        element: <Crypto />,
        
      },
      {
        path:"trending",
        element: <Trending />,
        
      },
      {
        path:"saved",
        element: <Saved />,
        
      },
      {
        path:"live",
        element:<LivePage/>
      },
      
    ]


  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </React.StrictMode>
);
