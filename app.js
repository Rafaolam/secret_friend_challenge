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
    if (name) { 
        addName(name);
        input.value = '';

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
