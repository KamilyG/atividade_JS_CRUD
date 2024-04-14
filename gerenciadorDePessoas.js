

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

//cadastrarPessoa(nome, idade, cidade);

function atualizarPessoa(idAlterar, campoAlterar) {
    for (i in pessoasCadastradas) {
            if (idAlterar == pessoasCadastradas[i].ID) {
                if (campoAlterar == "nome") {
                    pessoasCadastradas[i].nome = prompt("Digite o novo nome: ");
                } else if (campoAlterar == "idade") {
                    pessoasCadastradas[i].idade = prompt("Digite a nova idade: ");
                } else if (campoAlterar == "cidade") {
                    pessoasCadastradas[i].cidade = prompt("Digite a nova cidade: ");
                } else {
                    alert("O campo para alterar é inválido!");
                }
    
            } 
            alert("Não existe registor com esse ID!");
    }
}
    
//atualizarPessoa(832, "País");

function deletarPessoa(idDeletar) {
    for (i in pessoasCadastradas) {
        if (idDeletar == pessoasCadastradas[i].ID) {
            pessoasCadastradas.splice(i,1);
        }
    }
}

//deletarPessoa(1);

function listarPessoas() {
    console.log(pessoasCadastradas);
}

//listarPessoas()


let pessoasCadastradas = [{ID: 832, nome: 'Kamily', idade: '20', cidade: 'na'},
{ID: 1, nome: 'Laura', idade: '21', cidade: 'sy'}];

