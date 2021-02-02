import tpl from './info.tpl'

const info = {
  name:'Kido',
  age:18,
  career:'front-end',
  hobby:'music'
}

const oApp = document.querySelector('#app')
oApp.innerHTML = tpl(info)
