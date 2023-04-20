import request from '@/utils/request'

const uploadFile = data => {
    return request.post(`/api/upload`, data);
  };

const getFileList = () => {
  return request({
    url: '/api/files',
    method: 'get'
  })
  };
  
const deleteFile = data => {
    return request.post(`/api/delete`, data);
  };

export {
    uploadFile,
    getFileList,
    deleteFile
  };
  