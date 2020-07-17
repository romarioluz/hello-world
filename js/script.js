let input = document.querySelector('input[name=tarefa]')

let btn = document.querySelector('#botao')

let lista = document.querySelector('#lista')


let tarefas = [
    'Jogar GTA5',
    'Estudar Python',
    'Estudar Javascript',
    'Ver um filme',
    'Ler um livro'
];

function renderizarTarefas(){
    //Limpar a listagem de itens antes de renderizar a tela
    lista.innerHTML = ''
    for(tarefa of tarefas){
        //criar o item da lista
        let itemLista = document.createElement('li')

        //adicionar classe no item
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //criar um texto
        let itemTexto = document.createTextNode(tarefa)
        itemLista.appendChild(itemTexto)
        
        //Adicionar o item da lista na lista
        lista.appendChild(itemLista)
    }
}

renderizarTarefas()

//Adicionar evento de click no botão
//captar o valor do input
btn.onclick = function() {
    let novaTarefa = input.value;

    if(novaTarefa.length >0){

        //renderizar a tela novamente
        tarefas.push(novaTarefa);
        renderizarTarefas();
    
        //Limpar o input
        input.value = ''
        
    }else{
        let card = document.querySelector('.card')
        let span = document.createElement('span')
        span.setAttribute('class', 'alert alert-warning')

        let msg = document.createTextNode('Você precisa informar a tarefa!')
        span.appendChild(msg)
        card.appendChild(span)
    }
    
}

function removerSpans(){
    let spans = document.querySelectorAll('.span')
}


















