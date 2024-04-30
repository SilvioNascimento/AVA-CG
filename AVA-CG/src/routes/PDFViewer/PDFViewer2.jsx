// import React, { useState } from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

// function PDFViewer2() {

//     const pageNavigationPluginInstance = pageNavigationPlugin();
//     const { jumpToPage } = pageNavigationPluginInstance;

//     const [pageNumber, setPageNumber] = useState(0); // Página inicial como exemplo

//     // Handler para mudanças no campo de entrada
//     const handleInputChange = (e) => {
//         const page = parseInt(e.target.value, 10) - 1; // Ajuste para indexação base-0
//         setPageNumber(page);
//     };

//     // Handler para o evento onKeyDown
//     const handleKeyDown = (e) => {
//         if (e.key === 'Enter') {
//             jumpToPage(pageNumber);
//         }
//     };

//     return (
//         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
//             <div style={{
//                   border: '1px solid rgba(0, 0, 0, 0.3)',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   height: '950px',
//                   width: '750px',
//                   backgroundColor: '#eeeeee'
//               }}>
//                 <input
//                     type="number"
//                     value={pageNumber + 1} // Mostrar para o usuário a base-1
//                     onChange={handleInputChange}
//                     onKeyDown={handleKeyDown}
//                     min="1"
//                     style={{ width: '60px' }}
//                 />
//                 <Viewer
//                     fileUrl="./Aula 08 - ImagemII.pdf"
//                     plugins={[pageNavigationPluginInstance]}
//                 />
//             </div>
//         </Worker>
//     );
// }

// export default PDFViewer2;

// 

import React, { useState } from 'react';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { propertiesPlugin } from '@react-pdf-viewer/properties';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

// Import styles
import '@react-pdf-viewer/properties/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

function PDFViewer2() {

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

    const toolbarPluginInstance = toolbarPlugin();
    const {Toolbar} = toolbarPluginInstance;

    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { CurrentPageLabel } = pageNavigationPluginInstance;

    const fullScreenPluginInstance = fullScreenPlugin();
    const { EnterFullScreenButton } = fullScreenPluginInstance;

    const filePluginInstance = getFilePlugin();
    const { DownloadButton } = filePluginInstance;

    const propertiesPluginInstance = propertiesPlugin();
    const {ShowPropertiesButton} = propertiesPluginInstance;

    const pageLayout = {
        transformSize: ({ size }) => ({ height: size.height + 15, width: size.width + 15 }),
    };


    return (

        
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <div style={{ display: 'flex', height: '100vh' }}>
                {sidebarVisible && (
                    <div style={{
                        width: '250px',
                        background: '#f0f0f0',
                        padding: '10px'
                    }}>
                        {/* Contente da sidebar aqui */}
                        Sidebar content here
                    </div>
                )}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column'  }}>
                    
                    <div style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#d9dfe2', width:'100%'}}>
                        <Toolbar>
                            {(props) => (
                                <div style={{
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    width: '100%', 
                                    height: '100%', 
                                    justifyContent: 'space-between'
                                    }}>
                                        <button onClick={toggleSidebar}>Toggle Sidebar</button>
                                        <div style={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            padding: '4px',
                                        }}>
                                            <CurrentPageLabel>
                                                {({ currentPage, numberOfPages }) => (
                                                    <span>
                                                        {currentPage + 1} / {numberOfPages}
                                                    </span>
                                                )}
                                            </CurrentPageLabel>
                                        </div>
                                        <div style={{
                                            alignItems: 'center',
                                            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            padding: '4px',
                                        }}>
                                            <DownloadButton />
                                            <EnterFullScreenButton />
                                            <ShowPropertiesButton/>
                                        </div>
                                </div>
                            )}
                        </Toolbar>
                    </div>
                    
                    <div style={{width: '950px', overflow:'auto'}}>
                        <Viewer 
                            fileUrl="./Aula 08 - ImagemII.pdf"
                            defaultScale={SpecialZoomLevel.PageFit}
                            pageLayout={pageLayout}
                            plugins={[toolbarPluginInstance, fullScreenPluginInstance, filePluginInstance,
                                propertiesPluginInstance, pageNavigationPluginInstance]}
                        />
                    </div>
                </div>
            </div>
        </Worker>
        
    );
}

export default PDFViewer2;



// import React from 'react';
// import { Viewer } from '@react-pdf-viewer/core';
// import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
// import { GlobalWorkerOptions } from 'pdfjs-dist';

// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/toolbar/lib/styles/index.css';

// const PDFViewer2 = () => {
//     GlobalWorkerOptions.workerSrc = './node_modules/pdfjs-dist/build/pdf.worker.js';    

//     const toolbarPluginInstance = toolbarPlugin();
//     const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

//     const transform = (slot) => {
//         const { NumberOfPages } = slot;
//         return {
//             ...slot,
//             NumberOfPages: () => (
//                 <>
//                     of <NumberOfPages />
//                 </>
//             ),
//         };
//     };

//     return (
//         <div
//             className="rpv-core__viewer"
//             style={{
//                 border: '1px solid rgba(0, 0, 0, 0.3)',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 height: '100%',
//             }}
//         >
//             <div
//                 style={{
//                     alignItems: 'center',
//                     backgroundColor: '#eeeeee',
//                     borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                     display: 'flex',
//                     padding: '4px',
//                 }}
//             >
//                 <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
//             </div>
//             <div
//                 style={{
//                     flex: 1,
//                     overflow: 'hidden',
//                 }}
//             >
//                 <Viewer fileUrl= './Aula 08 - ImagemII.pdf' plugins={[toolbarPluginInstance]} />
//             </div>
//         </div>
//     );
// };

// export default PDFViewer2;

// import React, { useState } from 'react';
// import { Viewer } from '@react-pdf-viewer/core';
// import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
// import { GlobalWorkerOptions } from 'pdfjs-dist';
// import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';


// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/toolbar/lib/styles/index.css';

// const PDFViewer2 = () => {
//     GlobalWorkerOptions.workerSrc = './node_modules/pdfjs-dist/build/pdf.worker.js';

//     // Inicializa os plugins
//     const toolbarPluginInstance = toolbarPlugin();
//     const pageNavigationPluginInstance = pageNavigationPlugin();
    
//     // Extraia os componentes necessários dos plugins
//     const { Toolbar } = toolbarPluginInstance;
//     const { jumpToPage } = pageNavigationPluginInstance;

//      // Estado para controlar o número da página inserido pelo usuário
//      const [currentPage, setCurrentPage] = useState(0);

//      // Handler para atualizar o estado com o número da página inserido
//      const onCurrentPageChange = (e) => {
//          const pageNumber = parseInt(e.target.value, 10);
//          setCurrentPage(pageNumber - 1); // ajuste para indexação base-0
//      };
 
//      // Handler para pular para a página quando o usuário pressiona 'Enter'
//      const onKeyDown = (e) => {
//          if (e.key === 'Enter') {
//              // Certifique-se de que o número da página esteja dentro dos limites válidos
//              jumpToPage(currentPage);
//              e.preventDefault();
//          }
//      };
 

//     const renderToolbar = (Toolbar) => (
//         <Toolbar>
//             {(slots) => {
//                 const {
//                     CurrentPageInput,
//                     NumberOfPages,
//                     Zoom,
//                     ZoomIn,
//                     ZoomOut,
//                     // Remova ou comente os componentes que você não quer exibir
//                 } = slots;
//                 return (
//                     <div
//                         style={{
//                             alignItems: 'center',
//                             display: 'flex',
//                             width: '100%',
//                         }}
//                     >
//                         {/* Inclua apenas os botões que você quer que sejam visíveis */}
//                         <div style={{ padding: '0px 2px' }}>
//                             <ZoomOut />
//                         </div>
//                         <div style={{ padding: '0px 2px' }}>
//                             <Zoom />
//                         </div>
//                         <div style={{ padding: '0px 2px' }}>
//                             <ZoomIn />
//                         </div>
//                         <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
//                             <CurrentPageInput 
//                                 value={currentPage + 1}
//                                 onChange={onCurrentPageChange}
//                                 onKeyDown={onKeyDown}
//                             />
//                         </div>
//                         <div style={{ padding: '0px 2px' }}>
//                             / <NumberOfPages />
//                         </div>
//                         {/* Os componentes removidos não serão renderizados */}
//                     </div>
//                 );
//             }}
//         </Toolbar>
//     );

//     return (
//         <div
//             className="rpv-core__viewer"
//             style={{
//                 border: '1px solid rgba(0, 0, 0, 0.3)',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 height: '100%',
//             }}
//         >
//             <div
//                 style={{
//                     alignItems: 'center',
//                     backgroundColor: '#eeeeee',
//                     borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                     display: 'flex',
//                     padding: '4px',
//                 }}
//             >
//                 {renderToolbar(Toolbar)}
//             </div>
//             <div
//                 style={{
//                     flex: 1,
//                     overflow: 'hidden',
//                 }}
//             >
//                 <Viewer fileUrl='./Aula 08 - ImagemII.pdf' 
//                 plugins={[toolbarPluginInstance, pageNavigationPluginInstance]} />
//             </div>
//         </div>
//     );
// };

// export default PDFViewer2;
