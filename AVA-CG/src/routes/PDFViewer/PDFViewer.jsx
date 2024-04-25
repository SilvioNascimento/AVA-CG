import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { themePlugin } from '@react-pdf-viewer/theme';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

// Import styles
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

function PDFViewer () {
    
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { CurrentPageLabel } = pageNavigationPluginInstance;

    const themePluginInstance = themePlugin();

    const fullScreenPluginInstance = fullScreenPlugin();
    const { EnterFullScreenButton } = fullScreenPluginInstance;

    const filePluginInstance = getFilePlugin();
    const { DownloadButton } = filePluginInstance;

    const toolbarPluginInstance = toolbarPlugin();
    const {Toolbar} = toolbarPluginInstance;

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
                  height: '950px',
                  width: '750px'
              }}
          >
          <Toolbar>
            {() => (
                <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
                  <div></div>
                  <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
                    <CurrentPageLabel>
                        {({ currentPage, numberOfPages }) => (
                            <span style={{ marginLeft: '0px' }}>
                                Page {currentPage + 1} of {numberOfPages}
                            </span>
                        )}
                    </CurrentPageLabel>
                  </div>
                  <div style={{ display: 'flex'}}>
                    <DownloadButton />
                    <EnterFullScreenButton />
                  </div>
                </div>
            )}
          </Toolbar>
          <Viewer 
              fileUrl="./Aula 08 - ImagemII.pdf"
              defaultScale={SpecialZoomLevel.PageFit} 
              onPageChange={handlePageChange} 
              plugins={[toolbarPluginInstance, filePluginInstance, fullScreenPluginInstance, 
                themePluginInstance, pageNavigationPluginInstance]}

              
          />
      </div>
      </Worker>
  
  
      
    )
  }

export default PDFViewer;
