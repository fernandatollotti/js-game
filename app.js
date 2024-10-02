alert('Boa vindas ao jogo do número secreto.');

let numberMax = 100;
let secretNumber = parseInt(Math.random() * numberMax + 1);
let guess;
let attempts = 1;

while (guess != secretNumber) {
  guess = prompt(`Escolha um número entre 1 a ${numberMax}`);

  if (guess == '' || guess == 0 || guess == null) {
    alert('Erro! Preencha todos os campos');
  } else if (guess == secretNumber) {
    break;
  } else {
    if (guess > secretNumber) {
      alert(`O número secreto é menor que ${guess}`);
    } else {
      alert(`O número secreto é maior que ${guess}`);
    }
    attempts++;
  }
}

let wordAttempt = attempts > 1 ? 'tentativas' : 'tentativa';
alert(`Muito bem! Você acertou o número secreto é ${secretNumber} com ${attempts} ${wordAttempt}.`);