import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//1 - Configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from './routes/Login/Login.jsx';
import Disciplinas from './routes/Disciplinas/Disciplinas.jsx';
import ErrorPage from './routes/Errors/ErrorPage.jsx';
import Register from './routes/Register/Register.jsx';
import SistemasMultimidia from './routes/SistemasMultimidia/SistemasMultimidia.jsx';

// Rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    //3 - Página de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />
      },
      {
        path: "/disciplinas",
        element: <Disciplinas />,
      },
      {
        path: "/SistemasMultimidia",
        element: <SistemasMultimidia />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
