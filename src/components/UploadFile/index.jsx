import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Upload, Icon, message } from "antd";
const { Dragger } = Upload;


class UploadExcel extends Component {
  static propTypes = {
    uploadSuccess: PropTypes.func.isRequired,
  };
  state = {
    loading: false,
    excelData: {
      header: null,
      results: null,
    },
  };
  draggerProps = () => {
    let _this = this;
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
      },
      beforeUpload(file, fileList) {
        if (!isExcel(file)) {
          message.error("不支持的文件格式");
          return false;
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

export default UploadExcel;
