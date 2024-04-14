/*
 Cadastro (Create): Você deve criar uma função cadastrarPessoa que recebe um objeto
representando uma pessoa (com campos como "nome", "idade", "cidade", etc.) e o adiciona à
lista de pessoas cadastradas.
 Atualização (Update): Você deve criar uma função atualizarPessoa que recebe um ID e um
objeto com campos a serem atualizados. Ela deve encontrar a pessoa com o ID correspondente
e atualizar os campos especificados.
 Deleção (Delete): Você deve criar uma função deletarPessoa que recebe um ID e remove a
pessoa correspondente da lista.
 Listagem (Read): Você deve criar uma função listarPessoas que retorna a lista atual de pessoas
cadastradas
*/

function gerarID() {
    return Math.floor(Math.random() * 1000)  //Gera IDs entre o e 999
}

function cadastrarPessoa(nome, idade, cidade) { 
    nome = prompt("Digite o seu nome: ")
    idade = prompt("Digite a sua idade: ")
    cidade = prompt("Digite o nome da sua cidade: ")

    const pessoa = {
        ID: gerarID(),
        nome: nome,
        idade: idade,
        cidade: cidade
    };
    pessoasCadastradas.push(pessoa)    
};


let pessoasCadastradas = [{ID: 832, nome: 'Kamily', idade: '20', cidade: 'na'}];


//cadastrarPessoa(nome, idade, cidade);


function atualizarPessoa(idAlterar, campoAlterar) {
    for (i in pessoasCadastradas) {
            if (idAlterar == pessoasCadastradas[i].ID) {
                if (campoAlterar == "nome") {
                    pessoasCadastradas[i].nome = prompt("Digite o novo nome: ")
                } else if (campoAlterar == "idade") {
                    pessoasCadastradas[i].idade = prompt("Digite a nova idade: ")
                } else if (campoAlterar == "cidade") {
                    pessoasCadastradas[i].cidade = prompt("Digite a nova cidade: ")
                } else {
                    alert("O campo para alterar é inválido!")
                }
    
            }
    }
}

    
//atualizarPessoa(832, "País");

console.log(pessoasCadastradas);