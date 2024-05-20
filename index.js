import './js/elements.js';


const btnSun= document.querySelector('.btnSun');
const btnMoon= document.querySelector('.btnMoon')



btnSun.addEventListener('click', ()=> {
  document.documentElement.classList.toggle('dark');
})
btnMoon.addEventListener('click', ()=> {
 document.documentElement.classList.toggle('dark');
})