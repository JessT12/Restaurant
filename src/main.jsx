import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import App from './App.jsx';

import Home from "./pages/home.jsx";
import Menu from "./pages/menu.jsx";
import Contact from "./pages/contact.jsx";
import About from "./pages/about.jsx";
import Food from "./pages/food.jsx";
import Drinks from "./pages/drinks.jsx";
import Cart from "./components/cart.jsx";

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

