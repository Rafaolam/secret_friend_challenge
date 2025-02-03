//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Criando array que vai armazenar o valor dos amigos
let names = [];

function addFriend(valueNames) {
    // Adiciona um amigo a lista de amigos. 
    names.push(valueNames);
}

function sortFriends() {
    // Seleciona um dos amigos da lista de forma aleatória.
    let selectedName = Math.floor(Math.random() * names.length);
    return names[selectedName];
}

function addFriendFromInput() {
    // Adiciona um amigo a lista a partir do campo de input. Checa se ele não está vazio.
    let input = document.getElementById('friendInput'); 
    let name = input.value; 
    if (name) { 
        addFriend(name);
        input.value = '';
    } else {
        alert("Please, insert a name!");
    }
}

 