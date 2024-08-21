const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Foi colocado quantos litros?', (litrosInput) => {
    var litros = parseFloat(litrosInput); // 

        function valoraPagar() {
            var result = litros * 5.50
            return result;
        }

        console.log('O valor total é R$:', valoraPagar());
        rl.close();
    });