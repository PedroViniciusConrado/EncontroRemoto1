console.log (" \n\BEM-VINDO AO SISTEMA DE CADASTRO DE PEÇAS!\n\ ");

let listaPeca = [];
let listaPesoPeca = [];
let entradasNomesUsuario = ["Volante","Disco de freio","Amortecedor","","Xyz", "Xyzw","Xyzw","Qwer","Tyui","Asdf","Ghjk","Zxcv","Bnmo","Plçç","Plçç"];
let entradasPesosUsuario = [600,160,2000,60,60,60,600,600,600,600,600,600,600,600,600];
let respostasUsuario = ["sim","sim","sim","sim","sim","sim","sim","sim","sim","sim","sim","sim","sim","sim"];

console.log ("Quer cadastrar peças? ");
let resposta = "sim";

for (let index1 = 0; listaPeca.length < 10 && resposta.toLowerCase() == "sim"; index1++) {
    for (let index2 = 0; listaPeca.length < 10; index2++) {
        console.log (`Digite o nome da peça: ${entradasNomesUsuario[index2]}`);
    
        let nomePeca = entradasNomesUsuario[index2];
    
        switch (nomePeca.length){
            case 0:
                console.log ("O nome da peça NÃO pode ser VAZIO!");
                break;
        
            case 1:
            case 2:
            case 3:
                console.log ("O nome da peça DEVE ter MAIS de 3 caracteres!");
            
            default:
                console.log ("Qual o peso da peça (em gramas)? ");
                console.log (entradasPesosUsuario[index2]);
                let pesoPeca = entradasPesosUsuario[index2];
                console.log (pesoPeca);            

                if (pesoPeca > 100) {
                    let adicionar = listaPeca.push (nomePeca);
                    adicionar = listaPesoPeca.push (pesoPeca);
                    // console.log (listaPeca);
    
                } else {
                    console.log ("Cada peça DEVE ter MAIS de 100 gramas!");
                }
        }

        resposta = respostasUsuario[index2];
        let indice = index2;
        if (listaPeca.length <= 10) {
            if (indice > 10) {
                console.log ("VOCÊ ATINGIU O LIMITE DE 10 PEÇAS!!")
                console.log (" \n\Essa é sua lista de peças:\n\ ");
                console.log (listaPeca);
        
            }
            
        
        } else {
            console.log (" \n\SUA LISTA TERMINOU POR TER ATINGIDO O NÚMERO MÁXIMO DE PEÇAS (10)! Eis a sua lista:\n\ ");
            console.log (listaPeca.length);
        }
        
    }

}



