
//começao codigo cria variavel,guarda o nome do hotel e do usúario 
//duas aspas em js significa texto
let nomeHotel = "";
let nomeUsuario = "";

inicioPrograma();

function inicioPrograma() {
    nomeHotel = prompt("Qual o nome do hotel?")
    alert("O nome do hotel é " + nomeHotel)

    nomeUsuario = prompt("Qual o seu nome?")
    let senha;

//Acessa o sistema do hotel, somente quando acerta a senha 
//! seria não, de que não é essa senha

    while (senha != 2678){
        senha = parseInt(prompt("Digite a senha:"))
        if (senha != 2678){
            alert("Senha incorreta!")
        }
    }

    alert("Bem vindo ao Hotel " + nomeHotel + ", " + nomeUsuario + ". É um imenso prazer ter você por aqui!")
    inicio();
}

function inicio() {
    let opcao;

//do while é laço de repetição, não esquece, a prof já disse
    do {
        opcao = parseInt(prompt(
            "Hotel " + nomeHotel + "\n1" +
            "1- Reservar Quarto\n2" +
            "2- Cadastro de Hóspedes\n3" +
            "3- Cadastrar/Pesquisar\n4" +
            "4- Evento (Garçons)\n5" +
            "5- Buffet\n6" +
            "6- Auditório\n7" +
            "7- Restaurante\n8" +
            "8- Combustível\n9" +
            "9- Manutenção\n10" +
            "0- Sair"
        ))

        switch(opcao) {
            case 1: reservarQuarto(); 
            break;
            case 2: cadastroHospedes();
            break;
            case 3: cadastrarPesquisar(); 
            break;
            case 4: eventoGarcom(); 
            break;
            case 5: buffet(); 
            break;
            case 6: auditorio(); 
            break;
            case 7: restaurante(); 
            break;
            case 8: combustivel(); 
            break;
            case 9: manutencao(); 
            break;
            case 0:

        alert("Muito obrigado e até logo, " + nomeUsuario + ".");
            break;
            default:
        alert("Opção inválida")
        }

    } while(opcao != 0);
}

function reservarQuarto() {
    let valor = parseFloat(prompt("Qual o valor padrão da diária?"));

    if (valor <= 0) {
        alert("Valor inválido");
        return;
    }

    let dias = parseInt(prompt("Quantas diárias serão necessárias?"));

    if (dias <= 0 || dias > 30) {
        alert("Valor inválido");
        return;
    }

    let total = valor * dias;
    alert("O valor de " + dias + " dias de hospedagem é de R$" + total);

    let hospede = prompt("Qual o nome do hóspede?");
    let confirmar = prompt(nomeUsuario + ", você confirma a hospedagem para " + hospede + " por " + dias + " dias? S/N");

    if (confirmar.toUpperCase() === "S") {
        alert(nomeUsuario + ", reserva efetuada para " + hospede + ". O valor total é de R$" + total);
    } else {
        alert(nomeUsuario + ", reserva não efetuada");
    }
}

//////////////////////////////////////////////////
// 2
function cadastroHospedes() {
    let valor = parseFloat(prompt("Qual o valor padrão da diária?"));
    let gratuidade = 0;
    let meia = 0;
    let total = 0;

    while (true) {
        let nome = prompt("Qual o nome do hóspede? (Digite PARE para encerrar)");

        if (nome.toUpperCase() === "PARE") break;

        let idade = parseInt(prompt("Qual a idade do hóspede?"));

        if (idade < 6) {
            alert(nome + " possui gratuidade");
            gratuidade++;
        } else if (idade > 60) {
            alert(nome + " paga meia");
            meia++;
            total += valor / 2;
        } else {
            total += valor;
        }
    }

    alert(nomeUsuario + ", o valor total das hospedagens é: R$" + total +
    "; " + gratuidade + " gratuidade(s); " + meia + " meia(s)");
}

//////////////////////////////////////////////////
// 3
let lista = [];

function cadastrarPesquisar() {
    let opcao;

    do {
        opcao = parseInt(prompt("1- Cadastrar\n2- Pesquisar\n3- Sair"));

        switch(opcao) {
            case 1:
                if (lista.length >= 15) {
                    alert("Máximo de cadastros atingido");
                } else {
                    let nome = prompt("Qual o nome do hóspede?");
                    lista.push(nome);
                    alert("Hóspede " + nome + " foi cadastrado(a) com sucesso!");
                }
                break;

            case 2:
                let busca = prompt("Qual o nome do hóspede?");
                if (lista.includes(busca)) {
                    alert("Hóspede " + busca + " foi encontrado(a)!");
                } else {
                    alert("Hóspede não encontrado");
                }
                break;
        }

    } while(opcao != 3);
}

//////////////////////////////////////////////////
// 4
function eventoGarcom() {
    let horas = parseInt(prompt("Qual a duração do evento em horas?"));
    let garcons = parseInt(prompt("Quantos garçons serão necessários?"));

    let total = horas * garcons * 10.5;
    alert("Custo total: R$ " + total);

    let resp = prompt("Gostaria de efetuar a reserva? S/N");

    if (resp.toUpperCase() === "S") {
        alert(nomeUsuario + ", reserva efetuada com sucesso.");
    } else {
        alert("Reserva não efetuada.");
    }
}

//////////////////////////////////////////////////
// 5
function buffet() {
    let pessoas = parseInt(prompt("Qual o número de convidados para o evento?"));

    if (pessoas > 350) {
        alert("Quantidade de convidados superior à capacidade máxima.");
        return;
    }

    let cafe = pessoas * 0.2;
    let agua = pessoas * 0.5;
    let salgados = pessoas * 7;

    let total = (cafe * 0.8) + (agua * 0.4) + ((salgados / 100) * 34);

    alert("O evento precisará de " + cafe + " litros de café, " +
    agua + " litros de água, " + salgados + " salgados. O custo total do evento será de R$ " + total);

    let resp = prompt("Gostaria de efetuar a reserva? S/N");

    if (resp.toUpperCase() === "S") {
        alert(nomeUsuario + ", reserva efetuada com sucesso.");
    } else {
        alert("Reserva não efetuada.");
    }
}

//////////////////////////////////////////////////
// 6
function auditorio() {
    let convidados = parseInt(prompt("Qual o número de convidados para o seu evento?"));

    if (convidados <= 0 || convidados > 350) {
        alert("Número de convidados inválido");
        return;
    }

    if (convidados <= 150) {
        alert("Use o auditório Laranja (não é necessário adicionar cadeiras)");
    } else if (convidados <= 220) {
        let extras = convidados - 150;
        alert("Use o auditório Laranja (inclua mais " + extras + " cadeiras)");
    } else {
        alert("Use o auditório Colorado");
    }

    let resp = prompt("Gostaria de efetuar a reserva? S/N");

    if (resp.toUpperCase() === "S") {
        alert(nomeUsuario + ", reserva efetuada com sucesso.");
    } else {
        alert(nomeUsuario + ", reserva não efetuada.");
    }
}

//////////////////////////////////////////////////
// 7
function restaurante() {
    let dia = prompt("Qual o dia do evento?");
    let hora = parseInt(prompt("Qual a hora do evento?"));

    if (
        (dia !== "sabado" && dia !== "domingo" && hora >= 7 && hora <= 23) ||
        ((dia === "sabado" || dia === "domingo") && hora >= 7 && hora <= 15)
    ) {
        let empresa = prompt("Qual o nome da empresa?");
        alert("Restaurante reservado para " + empresa + ". " + dia + " às " + hora + "hs");
    } else {
        alert("Restaurante indisponível");
    }
}

//////////////////////////////////////////////////
// 8
function combustivel() {
    let a1 = parseFloat(prompt("Álcool Wayne Oil:"));
    let g1 = parseFloat(prompt("Gasolina Wayne Oil:"));
    let a2 = parseFloat(prompt("Álcool Stark Petrol:"));
    let g2 = parseFloat(prompt("Gasolina Stark Petrol:"));

    let custoWay = (a1 <= g1 * 0.7) ? a1 * 42 : g1 * 42;
    let custoStark = (a2 <= g2 * 0.7) ? a2 * 42 : g2 * 42;

    if (custoWay < custoStark) {
        alert(nomeUsuario + ", é mais barato abastecer no posto Wayne Oil");
    } else {
        alert(nomeUsuario + ", é mais barato abastecer no posto Stark Petrol");
    }
}

//////////////////////////////////////////////////
// 9
function manutencao() {
    let menor = Infinity;
    let melhor = "";

    while (true) {
        let empresa = prompt("Qual o nome da empresa?");
        let valor = parseFloat(prompt("Valor por aparelho:"));
        let qtd = parseInt(prompt("Quantidade de aparelhos:"));
        let desc = parseFloat(prompt("Desconto (%):"));
        let minimo = parseInt(prompt("Quantidade mínima para desconto:"));

        let total = valor * qtd;

        if (qtd >= minimo) {
            total -= total * (desc / 100);
        }

        alert("O serviço de " + empresa + " custará R$ " + total);

        if (total < menor) {
            menor = total;
            melhor = empresa;
        }

        let continuar = prompt("Deseja informar novos dados? S/N");

        if (continuar.toUpperCase() !== "S") break;
    }

    alert("O orçamento de menor valor é o de " + melhor + " por R$ " + menor);
}