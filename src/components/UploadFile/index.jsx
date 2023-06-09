import React, { Component } from "react";
import { Upload, Icon, message } from "antd";
const { Dragger } = Upload;


class UploadFile extends Component {
  state = {
    loading: false,
    excelData: {
      header: null,
      results: null,
    },
  };
  draggerProps = () => {
    return {
      name: "file",
      multiple: true,
      action: "/api/upload",
      // accept: ".png",
      onChange(info) {
        const { status } = info.file;
        console.log(status);
        console.log(info);
        if (status === "done") {
          message.success(`${info.file.name} 文件上传成功`);
        } else if (status === "error") {
          message.error(`${info.file.name} 文件上传失败`);
        } else if (status === 'removed') {
          //...
        }
      }
    };
  };
  
  render() {
    return (
      <div>
        <Dragger {...this.draggerProps()}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">点击上传文件或拖拽到这里</p>
        </Dragger>
      </div>
    );
  }
}

export default UploadFile;
