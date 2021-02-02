function tplReplace (template ,replaceObject){
  //把模板里的{{}}换成对象key对应value
  return template.replace(/\{\{(.*?)\}\}/g,(node,key)=>{
    return replaceObject[key]
  })
}

module.exports = {
  tplReplace
}