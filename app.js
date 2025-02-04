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
    // Adiciona um amigo a lista a partir do campo de input. Checa se ele está vazio.

    let input = document.getElementById('nameInput'); 
    let name = input.value;
    input.value = ''; 
    if (name) { 
        addName(name);
        changeAddButtonColor();
        displayName(name);
    } else {
        alert("Por favor, insira um nome válido.");
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
    let catchListOfNames = document.getElementById('nameList');

    // Checa se a lista de amigos está vazia.
   if (names.length === 0) {

       alert("Por favor, insira um nome.");
       catchListOfNames.innerHTML = ''; // Limpa a lista de amigos
       catchSelectedName.innerHTML = '';

   } else {
    // Caso a lista de amigos não esteja vazia, ele sorteia um nome e exibe na tela.

    catchListOfNames.innerHTML = '';
    catchSelectedName.innerHTML = '';  // Limpa o nome selecionado.
    liSelectedName.textContent = `O amigo secreto sorteado é: ${sortNames()}`;
    catchSelectedName.appendChild(liSelectedName);
    names = []; // Serve para limpar o array e caso ele clique em novo sorteio não gerar outro nome a menos que digite novas opções.
    }
}

function changeAddButtonColor(){
    // Muda a cor do botão de adicionar amigo. Não esteja no projeto mas pensei em adicionar para melhorar a experiência do usuário.

    let input = document.getElementById('nameInput');
    let button = document.querySelector('.button-add');
    
    if (input.value.trim() !== ""){
        button.style.backgroundColor = "#fe652b";
    } else {
        button.style.backgroundColor = "#C4C4C4";
    }
}

// Chamando a função de mudar a cor do botão de adicionar amigo.
let input = document.getElementById('nameInput');
input.addEventListener('input', changeAddButtonColor);