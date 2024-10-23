let saldo = 1412
let deposito = 300
let saque = 100

let operacao = saldo + deposito;
console.log("Saldo: " + operacao);
saldo = operacao; 
operacao = saldo - saque;
console.log("Saldo: " + operacao);
saldo = operacao; 
console.log("Saldo: " + saldo);