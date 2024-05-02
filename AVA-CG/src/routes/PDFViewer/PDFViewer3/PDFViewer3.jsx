import React, { useState } from 'react';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { propertiesPlugin } from '@react-pdf-viewer/properties';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { rotatePlugin } from '@react-pdf-viewer/rotate';
import { Link } from 'react-router-dom';

// Import styles
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import '@react-pdf-viewer/properties/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';

import './style3.css';


function PDFViewer3() {

    const [sidebarVisible, setSidebarVisible] = useState(true);
    const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

    const toolbarPluginInstance = toolbarPlugin();
    const {Toolbar} = toolbarPluginInstance;

    const thumbnailPluginInstance = thumbnailPlugin(); 
    const { Thumbnails } = thumbnailPluginInstance;

    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { CurrentPageLabel } = pageNavigationPluginInstance;

    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

    const rotatePluginInstance = rotatePlugin();
    const { RotateBackwardButton } = rotatePluginInstance;

    const fullScreenPluginInstance = fullScreenPlugin();
    const { EnterFullScreenButton } = fullScreenPluginInstance;

    const filePluginInstance = getFilePlugin();
    const { DownloadButton } = filePluginInstance;

    const propertiesPluginInstance = propertiesPlugin();
    const {ShowPropertiesButton} = propertiesPluginInstance;

    const [pdfFile, setPdfFile] = useState('./Mídia Estática_Imagem.pdf');
    const pdfFileName = pdfFile.split('/').pop();

    const pageLayout = {
        transformSize: ({ size }) => ({ height: size.height + 15, width: size.width + 15}),
    };


    return (

        
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <div style={{ display: 'flex', height: '150vh' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    
                    <div className='toolbar-container3' style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#d9dfe2', width:'100%'}}>
                        <Toolbar>
                            {(props) => (
                                <div style={{
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    width: '100%', 
                                    height: '100%', 
                                    justifyContent: 'space-between'
                                    }}>
                                        <button onClick={toggleSidebar} className="sidebar-toggle-button">
                                            <span className="button-icon"></span>
                                        </button>

                                        <span style={{ marginLeft: '-260px' }}>{pdfFileName}</span>

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

                                            <div style={{paddingLeft: '15px', paddingRight:'5px'}}>
                                                |
                                            </div>

                                            <ZoomOutButton />
                                            <ZoomPopover />
                                            <ZoomInButton />

                                            <div style={{paddingLeft: '5px', paddingRight:'15px'}}>
                                                |
                                            </div>

                                            <RotateBackwardButton />
                                            
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
                    <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                        {sidebarVisible && (
                            <div style={{
                                width: '200px',
                                background: '#d9dfe2',
                                padding: '10px'
                            }}>
                                {/* Contente da sidebar aqui */}
                                <Thumbnails/>
                            </div>
                        )}
                            <div style={{width: '950px',overflow:'auto'}}>
                                <Viewer 
                                    fileUrl="./Mídia Estática_Imagem.pdf"
                                    defaultScale={SpecialZoomLevel.PageFit}
                                    pageLayout={pageLayout}
                                    plugins={[toolbarPluginInstance, fullScreenPluginInstance, filePluginInstance,
                                        propertiesPluginInstance, pageNavigationPluginInstance, thumbnailPluginInstance,
                                        zoomPluginInstance, rotatePluginInstance]}
                                />
                            </div>
                    </div>
                    <div className='Area-btn-SistemasMultimidia3'>
                        <Link to='/Midia-Estatica_Imagem'>
                            <button className='btn-Midia'>
                                Mídia Estática - Imagem
                            </button>
                        </Link>

                        <Link to ='/SistemasMultimidia'>
                            <button className='btn-Voltar-de-Midia'>
                                Voltar
                            </button>
                        </Link> 

                        <Link to='/Midia-Dinamica_Video-E-Audio'>
                            <button className='btn-Midia-Dinamica'>
                                Mídia Dinâmica - Vídeo e Áudio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Worker>
        
    );
}

export default PDFViewer3;