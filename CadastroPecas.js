console.log (" \n\BEM-VINDO AO SISTEMA DE CADASTRO DE PEÇAS!\n\ ");

const entrada = require ('prompt-sync')({sigint: true});
let listaPeca = [];
let resposta = "sim";

while (listaPeca.length < 10 && resposta.toLowerCase() == "sim") {
    resposta = entrada ("Digite o nome da peça: ");
    let nomePeca = resposta;

    if (nomePeca.length > 3){
        resposta = entrada ("Qual o peso da peça (em gramas)? ");
        let pesoPeca = resposta.replace(/[^0-9]/g,'');

        if (pesoPeca > 100) {
            let adicionar = listaPeca.push (nomePeca);
            console.log (listaPeca);

        } else {
            console.log ("Cada peça DEVE ter MAIS de 100 gramas!");
        }

    }else {
        console.log ("Cada nome de peça DEVE ter MAIS de 3 letras!");
    }
    resposta = entrada ("Quer cadastrar outra peça? ");
}

if (listaPeca.length < 10) {
    console.log (" \n\Essa é sua lista de peças:\n\ ");
    console.log (listaPeca);

} else {
    console.log (" \n\SUA LISTA TERMINOU POR TER ATINGIDO O NÚMERO MÁXIMO DE PEÇAS (10)! Eis a sua lista:\n\ ");
    console.log (listaPeca);
}
