let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let res ;
rl.question('Digite o primeiro valor: ', (valor1) => {
    rl.question('Digite o segundo valor: ', (valor2) => {
        console.log('Primeiro valor', valor1);  
        console.log('Segundo valor', valor2);
        console.log(valor1 + valor2);
        console.log(Number(valor1)+Number(valor2));

        rl.close();
    });
});
