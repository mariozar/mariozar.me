import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class Resume extends Component {
  render() {
    return (
      <div>
        <Document
          file="./arcgis.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
        </Document>
      </div>
    );
  }
}

export default Resume;
