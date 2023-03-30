import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AboutUs, Register, Login} from './Components/RoutingComponents';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/About",
    element: <AboutUs/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);


reportWebVitals();
