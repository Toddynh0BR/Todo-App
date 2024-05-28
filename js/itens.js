import * as el from './elements.js';
import status from './status.js';

export function UpdateItens(){
 el.itens.textContent = el.TODOS.children.length;
 //status.TodosValue
}

export function removeItem(event){
 const btnDelete = event.target;
 const itemRemove1 = btnDelete.parentElement;
 const itemRemove2 = itemRemove1.parentElement;
 const itemRemove3 = itemRemove2.parentElement;
 itemRemove3.remove();

 --status.CompletedItens;
 console.log(status.CompletedItens);
 UpdateItens()
}


export function itemCompleto(event){
 const btnCheck = event.target;
 const itemCheck = btnCheck.parentElement;
 const itemCheck2 = itemCheck.parentElement;
 const itemCheck3 = itemCheck2.parentElement;


 ++status.CompletedItens;
 console.log(status.CompletedItens);
 itemCheck3.classList.add('C');
 itemCheck2.classList.add('Completed');
}

export function itemIncompleto(event){
 const btnInCheck = event.target;
 const itemInCheck = btnInCheck.parentElement;
 const itemInCheck2 = itemInCheck.parentElement;
 const itemInCheck3 = itemInCheck2.parentElement;

 --status.CompletedItens;
 console.log(status.CompletedItens);
 itemInCheck3.classList.remove('C');
 itemInCheck2.classList.remove('Completed');
}

function removeDivsWithClassC() {
  const container = document.getElementById('TODOS');
  const divs = container.getElementsByClassName('C');
  
  const divsArray = Array.from(divs);
  
  divsArray.forEach(div => {
      container.removeChild(div);
  });
 
  UpdateItens()
}

// Call the function to remove the divs with class 'C'


el.ClearCompleted.addEventListener('click', removeDivsWithClassC);

