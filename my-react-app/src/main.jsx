import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import App from './App.jsx';

import Home from "./pages/home";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import About from "./pages/about";
import Food from "./pages/food";
import Drinks from "./pages/drinks";
import Cart from "./components/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/food", element: <Food /> },
      { path: "/drinks", element: <Drinks /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

