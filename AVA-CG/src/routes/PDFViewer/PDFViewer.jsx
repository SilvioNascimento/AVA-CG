// import React from 'react';
// import { Document, Page } from 'react-pdf';

// class PDFViewer extends React.Component {
//   state = {
//     numPages: null,
//     pageNumber: 1,
//   };

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   render() {
//     const { pageNumber, numPages } = this.state;
//     const { filePath } = this.props;

//     return (
//       <div>
//         <Document
//           file={filePath} // Caminho do arquivo PDF
//           onLoadSuccess={this.onDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </div>
//     );
//   }
// }

// export default PDFViewer;


// import React from 'react';
// import {useState} from 'react';
// import {Document, Page} from 'react-pdf';
// import pdfFile from '../Rulebook_v9_pt.pdf';

// function PDFViewer() {
//     const [numPages, setNumPages] = useState(null)
//     function onDocumentSuccess({numPages}) {
//         setNumPages(numPages)
//     }

//     return(
//         <div style={{display: "flex", justifyContent: "center"}}>
//             <div style={{width:"700px", border: "3px solid gray"}}>
//                 <Document file={pdfFile} onLoadSuccess={onDocumentSuccess}>
//                     {
//                         Array(numPages).fill().map((_, i) => (
//                             <Page pageNumber={i+1}></Page>
//                         ))
//                     }
//                 </Document>

//             </div>

//         </div>
//     );
// }

// export default PDFViewer;


// import React, {Component} from 'react';

// class PDFViewer extends Component {
//     render() {
//         return (
//             <div style={{position:'absolute', width:'100%', height:'100%'}}>
//                 <object 
//                 data={require('./Rulebook_v9_pt.pdf')}
//                 type="application/pdf"
//                 width='100%'
//                 height='100%'
//                 >

//                 </object>
//             </div>
//         );
//     }
// }
// export default PDFViewer;

// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import pdfjsWorker from '/pdfjs-dist/build/pdf.worker.min.js'; // Importe o worker do PDF.js

// // Configure o caminho para o worker do PDF.js
// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function PDFViewer({ filePath }) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "700px", border: "3px solid gray" }}>
                <Document file={filePath} onLoadSuccess={onDocumentSuccess}>
                    {
                        Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                        ))
                    }
                </Document>
            </div>
        </div>
    );
}

export default PDFViewer;
