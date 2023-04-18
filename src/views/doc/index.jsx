import React from 'react';
import TypingCard from '@/components/TypingCard'
const Doc = () => {
  const cardContent = `
    作者站点请戳这里 <a href="http://zhuoya.org/" target="_blank">站点</a>。
  `
  return (
    <div className="app-container">
      <TypingCard title='作者站点' source={cardContent}/>
    </div>
  );
}

export default Doc;