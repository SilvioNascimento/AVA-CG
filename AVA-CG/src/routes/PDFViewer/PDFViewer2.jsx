import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

function PDFViewer2() {

    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { jumpToPage } = pageNavigationPluginInstance;

    const [pageNumber, setPageNumber] = useState(0); // Página inicial como exemplo

    // Handler para mudanças no campo de entrada
    const handleInputChange = (e) => {
        const page = parseInt(e.target.value, 10) - 1; // Ajuste para indexação base-0
        setPageNumber(page);
    };

    // Handler para o evento onKeyDown
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            jumpToPage(pageNumber);
        }
    };

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div style={{
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '950px',
                  width: '750px',
                  backgroundColor: '#eeeeee'
              }}>
                <input
                    type="number"
                    value={pageNumber + 1} // Mostrar para o usuário a base-1
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    min="1"
                    style={{ width: '60px' }}
                />
                <Viewer
                    fileUrl="./Aula 08 - ImagemII.pdf"
                    plugins={[pageNavigationPluginInstance]}
                />
            </div>
        </Worker>
    );
}

export default PDFViewer2;

// import React from 'react';
// import { Viewer } from '@react-pdf-viewer/core';
// import { toolbarPlugin, goToPagePlugin } from '@react-pdf-viewer/toolbar';

// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/toolbar/lib/styles/index.css';

// const PDFViewer2 = () => {
//     // Plugins
//     const toolbarPluginInstance = toolbarPlugin();
//     const goToPagePluginInstance = goToPagePlugin();
//     const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
//     const { goToPage } = goToPagePluginInstance;

//     // Transform the toolbar to include the page input
//     const transform = (slot) => {
//         const { NumberOfPages, CurrentPageInput } = slot;
//         return Object.assign({}, slot, {
//             NumberOfPages: () => (
//                 <>
//                     of <NumberOfPages />
//                 </>
//             ),
//             CurrentPageInput: () => (
//                 <div style={{ padding: '0 2px' }}>
//                     <CurrentPageInput />
//                     <goToPage />
//                 </div>
//             ),
//         });
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
//                 <Viewer fileUrl='./Aula 08 - ImagemII.pdf' plugins={[toolbarPluginInstance, goToPagePluginInstance]} />
//             </div>
//         </div>
//     );
// };

// export default PDFViewer2;

