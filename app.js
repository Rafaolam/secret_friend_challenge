//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Criando array que vai armazenar o valor dos amigos
let names = [];

function addName(valueName) {
    // Adiciona um amigo a lista de amigos. 

    names.push(valueName);
}

function sortNames() {
    // Seleciona um dos amigos da lista de forma aleatória.

    let selectedName = Math.floor(Math.random() * names.length);
    return names[selectedName];
}

function addNameFromInput() {
    // Adiciona um amigo a lista a partir do campo de input. Checa se ele não está vazio.

    let input = document.getElementById('nameInput'); 
    let name = input.value;
    input.value = ''; 
    if (name) { 
        addName(name);
        changeAddButtonColor();
        displayName(name);
    } else {
        alert("Please, insert a name!");
    }
}

function displayName(name){
    // Adiciona o nome do amigo na lista de amigos na tela.

    let catchList = document.getElementById('nameList');
    let liName = document.createElement('li');
    liName.textContent = name;
    catchList.appendChild(liName);
}

function displaySelectedName() {
    // Adiciona o nome do amigo selecionado na tela.

    let catchSelectedName = document.getElementById('sortedName');
    let liSelectedName = document.createElement('li');

   if (names.length === 0) {

       alert("Please, insert a name!");
       document.getElementById('nameList').innerHTML = '' // Limpa a lista de amigos
       catchSelectedName.innerHTML = '';

   } else {

    document.getElementById('nameList').innerHTML = ''
    catchSelectedName.innerHTML = '';  // Limpa o nome selecionado
    liSelectedName.textContent = `The secret friend picked is: ${sortNames()}`;
    catchSelectedName.appendChild(liSelectedName);
    names = []; // Serve para limpar o array e caso ele clique em novo sorteio não gerar outro nome a menos que digite novas opções.
     }
}

function changeAddButtonColor(){
    // Muda a cor do botão de adicionar amigo.

    let input = document.getElementById('nameInput');
    let button = document.querySelector('.button-add');
    
    if (input.value.trim() !== ""){
        button.style.backgroundColor = "#fe652b";
    } else {
        button.style.backgroundColor = "#C4C4C4";
    }
}

let input = document.getElementById('nameInput');
input.addEventListener('input', changeAddButtonColor);