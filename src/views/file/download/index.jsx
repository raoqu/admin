import React, { Component } from "react";
import FileList from "@/components/FileList";
import { getFileList, deleteFile, downloadFile } from "@/api/file";

class FileDownload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.downloadItem = this.downloadItem.bind(this)
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    getFileList()
      .then(res => {
        const { data } = res.data;
        this.setState(state => ({
          data: data
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteItem(id, filePath) {
    deleteFile({ id: id, filePath: filePath })
      .then(res => {
        this.getList();
      })
      .catch(error => {
        console.log(error);
      });
  }

  downloadItem(id, filePath) {
    console.log('downloadItem')
    console.log(filePath)
    downloadFile({ id: id, filePath: filePath})
  }

  render() {
    return (
      <div>
        <FileList data={this.state.data} deleteItem={this.deleteItem} downloadItem={this.downloadItem}/>
      </div>
    );
  }
}

export default FileDownload;
