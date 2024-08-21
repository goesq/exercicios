const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('A máquina fica ativa por quantos dias?', (diasInput) => {
    var dias = parseFloat(diasInput); 
    rl.question('A máquina fica ativa por quantas horas?', (horasInput) => {
        var horas = parseFloat(horasInput); 

        function valoraPagar() {
            var result = (dias * horas) * 1750 * 0.75
            return result;
        }


        console.log('O valor total é R$:', valoraPagar());
        rl.close();
    });
});