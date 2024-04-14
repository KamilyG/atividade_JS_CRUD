function gerarID() {
    return Math.floor(Math.random() * 1000)  //Gera IDs entre o e 999
}

function cadastrarPessoa() { 
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
    }
}

function deletarPessoa(idDeletar) {
    for (i in pessoasCadastradas) {
        if (idDeletar == pessoasCadastradas[i].ID) {
            pessoasCadastradas.splice(i,1);
        }
    }
}

function listarPessoas() {
    console.log(pessoasCadastradas);
}

let pessoasCadastradas = [];

while (true) {
    let opcao = prompt("O que vocÊ quer fazer?\n 1-Cadastrar Pessoa\n 2-Atualizar Pessoa\n 3-Deletar Pessoa\n 4-Listar Pessoas\n 5-Sair");

    if (opcao==1) {
        cadastrarPessoa();
    } else if (opcao==2) {
        let id = prompt("Digite o ID a alterar:")
        let campo = prompt("Digite o campo a alterar (nome, idade, cidade):")
        atualizarPessoa(id,campo);
    } else if (opcao==3) {
        deletarPessoa(prompt("Digite o ID a deletar:"));
    } else if (opcao==4) {
        listarPessoas();
    } else if (opcao==5) {
        break
    }
    else {
        alert("Entrada inválida!")
    }
}


