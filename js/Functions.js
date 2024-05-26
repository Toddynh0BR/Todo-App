import * as el from './elements.js';

el.btnAll.addEventListener('click', ()=> {
 document.documentElement.classList.add('All');
 document.documentElement.classList.remove('Actives');
 document.documentElement.classList.remove('Completeds');
})
el.btnActive.addEventListener('click', ()=> {
 document.documentElement.classList.add('Actives');
 document.documentElement.classList.remove('All');
 document.documentElement.classList.remove('Completeds');
})
el.btnCompleted.addEventListener('click', ()=> {
 document.documentElement.classList.add('Completeds');
 document.documentElement.classList.remove('All');
 document.documentElement.classList.remove('Actives');
})



//Mobile
el.btnAllMB.addEventListener('click', ()=> {
 document.documentElement.classList.add('All');
 document.documentElement.classList.remove('Actives');
 document.documentElement.classList.remove('Completeds');
})

el.btnActiveMB.addEventListener('click', ()=> {
 document.documentElement.classList.add('Actives');
 document.documentElement.classList.remove('All');
 document.documentElement.classList.remove('Completeds');
})

el.btnCompletedMB.addEventListener('click', ()=> {
 document.documentElement.classList.add('Completeds');
 document.documentElement.classList.remove('All');
 document.documentElement.classList.remove('Actives');
})


