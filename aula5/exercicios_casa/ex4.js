let clinica = [];

clinica.push('Hamster');
clinica.push('Gato');
clinica.push('Cachorro');

console.log('Fila de animais na clínica:', clinica);

while (clinica.length > 0) {
  let animal = clinica.shift(); 
  console.log(`O animal ${animal} foi atendido.`);
}

console.log('Posição final da fila:', clinica);
