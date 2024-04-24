import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

function PDFViewer () {
    const fullScreenPluginInstance = fullScreenPlugin();
    const { EnterFullScreenButton } = fullScreenPluginInstance;

    const filePluginInstance = getFilePlugin();
    const { DownloadButton } = filePluginInstance;


    const handlePageChange = (e) => {
        localStorage.setItem('current-page', `${e.currentPage}`);
    };

    return (
  
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
  
      <div
              style={{
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '750px',
                  width: '550px'
              }}
          >
        <Viewer 
            fileUrl="./projetoBatalhaNaval.pdf" 
            defaultScale={SpecialZoomLevel.PageFit} 
            onPageChange={handlePageChange} 
            plugins={[fullScreenPluginInstance, filePluginInstance]} 
        />
      </div>
      <EnterFullScreenButton />
      {DownloadButton && <DownloadButton />}
      </Worker>
  
  
      
    )
  }

export default PDFViewer;
