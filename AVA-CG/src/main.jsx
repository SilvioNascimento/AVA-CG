import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './css/estilo.css'

//1 - Configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from './routes/Login/Login.jsx';
import Disciplinas from './routes/Disciplinas/Disciplinas.jsx';
import ErrorPage from './routes/Errors/ErrorPage.jsx';
import Register from './routes/Register/Register.jsx';
import SistemasMultimidia from './routes/SistemasMultimidia/SistemasMultimidia.jsx';
import PDFViewer from './routes/PDFViewer/PDFViewer.jsx';
import PDFViewer2 from './routes/PDFViewer/PDFViewer2.jsx';



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
       },
       {
         path:'/PDFViewer',
         element: <PDFViewer />
       },
       {
        path:'/PDFViewer2',
        element: <PDFViewer2 />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
