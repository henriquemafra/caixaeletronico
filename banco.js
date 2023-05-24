// define as variáveis

let saldo, opcoes;

saldo = 0;


// define as funções
function deposito() {
  let depositar = prompt("Qual valor deseja depositar?");
  depositar = parseFloat(depositar);
  saldo = parseFloat(saldo);
  if (depositar > 0) {
    saldo = saldo + depositar;
    alert("Depósito efetudado com sucesso, seu novo saldo é de: R$ " + saldo) }
    else 
        alert("Deposite um valor válido.")
    
    
}

function saque() {
  let sacar = prompt("Qual valor deseja sacar?");
  sacar = parseFloat(sacar);
  if (sacar > saldo)
  alert("Saldo insuficiente.")
  else {
  saldo = saldo - sacar;
  alert("Seu novo saldo: R$ " + saldo)
  }
}

// inicia o laço
while (true) {
// imprime o menu na tela
    opcoes = parseInt(prompt("Digite 1 para consultar seu saldo.\nDigite 2 para fazer um depósito.\n"
    +"Digite 3 para fazer um saque.\n Digite 4 para sair."))
// define o fluxo a partir da opcao inserida.
switch (opcoes) {
  case 1:
    alert("Seu saldo atual: R$ " + saldo);
    break;
  case 2:
    deposito();
    break;
  case 3:
    saque();
    break;
  case 4:
    alert("Obrigado por utilizar nossos serviços.") 
    break; 
  default:
    alert("Digite uma opção válida.");
    break;
}
// finaliza o programa caso o numero 4 seja digitado
if (opcoes === 4)
break;
}

//fim
