import React, { Component } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Table, Tag, Pagination } from "antd";
import { numberToTime, kbToMb } from "@/utils/units";

const { Column } = Table;

export class FileList extends Component {
  constructor(props) {
    super(props);
    this.deleteHanler = this.deleteHanler.bind(this);
    this.downloadHandler = this.downloadHandler.bind(this)
  }

  deleteHanler(id, filePath) {
    const { deleteItem } = this.props;
    deleteItem(id, filePath);
  }

  downloadHandler(id, filePath) {
    const { downloadItem } = this.props;
    downloadItem(id, filePath);
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
          <Column title="文件名"  key="fileName"
            render={record => (
              <a href={"/api/download?file=" + encodeURIComponent(record["filePath"])} target="_blank">{record["fileName"]}</a>
            )}
          />
          <Column
            title="上传时间"
            dataIndex="timeOfUpload"
            key="timeOfUpload"
            render={record => <span>{numberToTime(record)}</span>}
          />
          <Column
            title="文件大小"
            dataIndex="fileSize"
            key="fileSize"
            render={record => <span>{kbToMb(record)}</span>}
          />
          <Column
            title="操作"
            key="action"
            render={record => (
              <span>
                <DeleteOutlined
                  onClick={() =>
                    this.deleteHanler(record["_id"], record["filePath"])
                  }
                />
              </span>
            )}
          />
        </Table>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "20px",
            paddingRight: "20px"
          }}
        >
          <Pagination
            defaultCurrent={1}
            defaultPageSize={10}
            total={50}
            hideOnSinglePage
          />
        </div>
      </>
    );
  }
}

export default FileList;
