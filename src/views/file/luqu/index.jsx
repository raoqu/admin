import React, { Component } from "react";
import { Card, Button, Divider } from "antd";
import TypingCard from '@/components/TypingCard'
class Luqu extends Component {
  
  downloadResult() { this.openLink('/api/luqu/result'); }

  downloadSchools() { this.openLink('/api/luqu/count'); }

  openLink(url) {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('target', `_blank`,);
    
    document.body.appendChild(link);  // 生成链接
    link.click(); // 点击链接-触发下载
    link.parentNode.removeChild(link); // 删除链接
  }

  componentDidMount() {
  }

  render() {
    const title = (
      <span>
        <Button type='primary' onClick={this.downloadResult.bind(this)}>生成录取数据</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type='primary' onClick={this.downloadSchools.bind(this)}>下载统计结果</Button>
      </span>
    )
    const cardContent = 
      `1. 生成录取数据需要花一些时间，点击"生成数据"后稍作等待，直到出现文件下载窗口。<br/><br/>` + 
      `2. 如果此前已经生成过，可以直接进入"文件下载"找到luqu_result.xlsx和luqu_count.xlsx。`
    return (
      <div className="app-container">
        <Card title={title}/><br/>
        <TypingCard title='录取数据生成工具' source={cardContent} />

      </div>
    );
  }
}

export default Luqu;
