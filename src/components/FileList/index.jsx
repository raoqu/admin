import React, { Component } from "react";
import { Table, Button, Pagination } from "antd";
import { numberToTime, kbToMb } from "@/utils/units";

const { Column } = Table;

export class FileList extends Component {
  constructor(props) {
    super(props);
    this.deleteHanler = this.deleteHanler.bind(this);
  }

  deleteHanler(id, filePath) {
    console.log(filePath)
    const { deleteItem } = this.props;
    deleteItem(id, filePath);
  }

  render() {
    const { data } = this.props;

    return (
      <>
        <Table
          dataSource={data}
          rowKey={record => record._id}
          pagination={false}
        >
          <Column title="文件名"  key="fileName" width="50%"
            render={record => (
              <a href={"/api/download?file=" + encodeURIComponent(record["filePath"])} 
                target="_blank" rel="noopener noreferrer">{record["fileName"]}</a>
            )}
          />
          <Column
            title="上传时间"
            dataIndex="timeOfUpload"
            key="timeOfUpload" width="30%"
            render={record => <span>{numberToTime(record)}</span>}
          />
          {/* <Column
            title="文件大小"
            dataIndex="fileSize"
            key="fileSize"
            render={record => <span>{kbToMb(record)}</span>}
          /> */}
          <Column
            title="操作"
            key="action" width={50}
            render={record => (
              <span>
                <Button type="primary" shape="circle" icon="delete" title="删除" 
                  onClick={() => 
                    this.deleteHanler(record["_id"], record["filePath"])
                }/>
              </span>
            )}
          />
        </Table>
      </>
    );
  }
}

export default FileList;
