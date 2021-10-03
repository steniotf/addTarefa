// Adiciona lista

const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('form button');
const ulElement = document.querySelector('ul');
const liElement = document.querySelector('form button');

buttonElement.onclick= event =>{
  event.preventDefault();


  if (inputElement.value) {
    const textElement = document.createElement('span')
    textElement.innerHTML = inputElement.value
    const btnElement = document.createElement('button')
    btnElement.innerHTML = 'Remover';
    
    const liElement = document.createElement('li')
    liElement.appendChild(textElement);
    liElement.appendChild(btnElement);
    
    // remove o li que foi adicionado
    btnElement.onclick =() =>{
      ulElement.removeChild(liElement)
    }
    ulElement.appendChild(liElement);
    inputElement.value = '';

  }
}