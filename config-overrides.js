const { override,fixBabelImports,addLessLoader } = require("customize-cra")

module.exports = override(
  fixBabelImports('import',{  //import是babel-plugin-import的简写，是按需打包关键的插件
    libraryName : 'antd', // 针对的antd的库
    libraryDirectory:'es', //源码中的es文件目录
    style:true //加载less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '#1DA57A'}, 
  })
)