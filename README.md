#npm run dev
loader就是把不是js格式的文件转成js文件的,因为webpack只能处理js
所以会给loader函数传入原文件的string,
loader函数再return一个js格式的string,并且这个string是模块化的样子。
比如return ‘export default function(){console.log(“success”)}’ #export必不可少。
所有loader都处理完了,然后webpack就会对这个字符串做和其他js文件一样的处理打包
因为其他js也是转成字符串在处理的，所以实际上对他来说是一模一样的处理方法。
