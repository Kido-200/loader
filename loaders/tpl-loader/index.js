const {tplReplace} = require('../utils.js')
const { getOptions}  = require('loader-utils')

function tplLoader (source) {
  //source就是文件的字符串格式
  //把空格换行去掉
  source = source.replace(/\s+/g,'')

  //webpack自带的getOptions来获得调用时传入的options
  const {log} = getOptions(this)

  const _log = log ? `console.log('conmipled the file which is from ${this.resourcePath}')`:''


  //因为这函数要调用tplReplace，所以要把tplReplace的定义也放进去
  //其实不调用babel转ES5也行,把babel关了一样可以运行  不过兼容性差
  return `
  export default (options) => {
    ${tplReplace}
    ${_log}
    return tplReplace('${source}',options)
  }
  `
}


module.exports = tplLoader

