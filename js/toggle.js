import * as el from './elements.js'

el.btnSun.addEventListener('click', ()=> {
  document.documentElement.classList.toggle('dark');
})
el.btnMoon.addEventListener('click', ()=> {
 document.documentElement.classList.toggle('dark');
})