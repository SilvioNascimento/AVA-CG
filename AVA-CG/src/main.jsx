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
import Maintenance from './routes/Maintenance/Maintenance.jsx'
import Register from './routes/Register/Register.jsx';
import SistemasMultimidia from './routes/SistemasMultimidia/SistemasMultimidia.jsx';
import PDFViewer1 from './routes/PDFViewer/PDFViewer1/PDFViewer1.jsx';
import PDFViewer2 from './routes/PDFViewer/PDFViewer2/PDFViewer2.jsx';
import PDFViewer3 from './routes/PDFViewer/PDFViewer3/PDFViewer3.jsx';
import PDFViewer4 from './routes/PDFViewer/PDFViewer4/PDFViewer4.jsx';
import IntroducaoAosConceitos from './routes/AssuntosHTML/AssuntoHTML1/IntroducaoAosConceitos.jsx';
import TeoriaDasCores from './routes/AssuntosHTML/AssuntoHTML2/TeoriaDasCores.jsx';
import MidiaEstaticaImagem from './routes/AssuntosHTML/AssuntoHTML3/MidiaEstaticaImagem.jsx';
import MidiaDinamicaVideoEAudio from './routes/AssuntosHTML/AssuntoHTML4/MidiaDinamicaVideoEAudio.jsx';



// Rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/Disciplinas",
        element: <Disciplinas />,
      },
      {
        path: "/SistemasMultimidia",
        element: <SistemasMultimidia />,
       },
       {
        path:"/Introducao-aos-Conceitos",
        element: <IntroducaoAosConceitos/>
       },
       {
        path:'/Teoria-das-Cores',
        element: <TeoriaDasCores/>
       },
       {
        path:'/Midia-Estatica_Imagem',
        element: <MidiaEstaticaImagem />
       },
       {
        path:'/Midia-Dinamica_Video-E-Audio',
        element: <MidiaDinamicaVideoEAudio/>
       },
       {
        path:'/PDFViewer=Introducao-aos-Conceitos',
        element: <PDFViewer1 />
      },
      {
        path:'/PDFViewer=Teoria-das-Cores',
        element: <PDFViewer2/>
      },
      {
        path:'/PDFViewer=Mídia-Estática_Imagem',
        element: <PDFViewer3/>
      },
      {
        path:'/PDFViewer=Midia-Dinamica_Video-E-Audio',
        element: <PDFViewer4/>
      }, 
      {
        path:'/Maintenance',
        element: <Maintenance />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
