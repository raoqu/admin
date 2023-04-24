export default {

    downloadFile: (config) => {
      return {
        id: 0,
        filePath: "Upload/abc"
      };
    },
    fileList: (config) => {
        return {
            data: [
                {
                    fileName: "a.txt",
                    filePath: "Upload/a.txt",
                    size: 2000
                }
            ]
        }
    }
  };
  