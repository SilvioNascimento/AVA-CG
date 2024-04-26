import React,  { useRef } from 'react';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { rotatePlugin } from '@react-pdf-viewer/rotate';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail';

// Import styles
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

function PDFViewer () {

    const thumbnailPluginInstance = thumbnailPlugin();
    const { Thumbnails } = thumbnailPluginInstance;

    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;
    
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { CurrentPageLabel } = pageNavigationPluginInstance;

    const rotatePluginInstance = rotatePlugin();
    const { RotateBackwardButton} = rotatePluginInstance;

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
  
      <div style={{ display: 'flex', flexDirection: 'column',  width: '950px', border: '2px solid rgba(0, 0, 0, 0.3)' }}> {/* Ajuste para ocupar a altura total da viewport */}
          <div style={{ backgroundColor: "lightgray" }}>
            <Toolbar>
              {() => (
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    width: '100%', 
                    height: '100%', 
                    justifyContent: 'space-between'
                    }}>

                      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
                        <CurrentPageLabel>
                            {({ currentPage, numberOfPages }) => (
                                <span style={{ marginRight: '0px' }}>
                                    {currentPage + 1} / {numberOfPages}
                                </span>
                            )}
                        </CurrentPageLabel>

                        <div style={{ color: 'rgba(0, 0, 0, 0.5)', marginLeft: '10px', marginRight: '10px' }}>
                          |
                        </div>

                        <div style={{
                          alignItems: 'center',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                          display: 'flex',
                          justifyContent: 'center',
                        }}>
                          <ZoomOutButton />
                          <ZoomPopover />
                          <ZoomInButton />
                        </div>

                        <div style={{ color: 'rgba(0, 0, 0, 0.5)' , marginLeft: '10px', marginRight: '10px'}}>
                          |
                        </div>

                        <div style={{ marginLeft: '5px' }}>
                          <RotateBackwardButton/>
                        </div>
                      </div>

                    <div style={{ display: 'flex'}}>
                      <DownloadButton />
                      <EnterFullScreenButton />
                    </div>
                  </div>
              )}
            </Toolbar>
          </div>
          <div style={{ display: 'flex', flex: 1 }}>
              <div style={{ width: '200px', overflowY: 'auto' }}>
                <Thumbnails />
              </div>
              <div style={{ flex: 1 }}>
                <Viewer 
                  fileUrl="./Aula 08 - ImagemII.pdf"
                  defaultScale={SpecialZoomLevel.PageFit} 
                  onPageChange={handlePageChange} 
                  plugins={[toolbarPluginInstance, filePluginInstance, fullScreenPluginInstance, 
                    pageNavigationPluginInstance, rotatePluginInstance, zoomPluginInstance,
                    thumbnailPluginInstance]}
                  
                />
              </div>
          </div>
          
          
      </div>
      </Worker>
    )
  }

export default PDFViewer;
