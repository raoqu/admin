import React, { Component } from "react";
import UploadFile from "@/components/UploadFile";

class UploadFileContainer extends Component {
  render() {
    return (
      <div className="app-container">
        <UploadFile uploadSuccess={this.handleSuccess} />
        <br />
      </div>
    );
  }
}

export default UploadFileContainer;
