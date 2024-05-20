import * as el from './elements.js';

function UpdateItens(){
 el.itens.textContent = el.TODOS.children.length
}

UpdateItens()

function removeItem(event){
 const btnDelete = event.target;
 const itemRemove1 = btnDelete.parentElement;
 const itemRemove2 = itemRemove1.parentElement;
 itemRemove2.remove();
 UpdateItens()
}
document.querySelectorAll('#Delete').forEach(btnDelete => {
    btnDelete.addEventListener('click', removeItem);
});


function itemCompleto(event){
 const btnCheck = event.target;
 const itemCheck = btnCheck.parentElement;

 itemCheck.classList.toggle('Completed');
}
document.querySelectorAll('.circle').forEach(btnCheck => {
    btnCheck.addEventListener('click', itemCompleto);
});