// Exibe uma mensagem de boas-vindas ao jogador
alert('Boa vindas ao jogo do número secreto.');

// Define o valor máximo para o número secreto
let numberMax = 100;
// Gera um número secreto aleatório entre 1 e numberMax
let secretNumber = parseInt(Math.random() * numberMax + 1);
// Variável para armazenar o palpite do jogador
let guess;
// Contador de tentativas
let attempts = 1;

// Loop que continua até o jogador acertar o número secreto
while (guess != secretNumber) {
  // Solicita que o jogador escolha um número
  guess = prompt(`Escolha um número entre 1 a ${numberMax}`);

  // Verifica se o campo está vazio, igual a 0 ou se o usuário cancelou o prompt
  if (guess == '' || guess == 0 || guess == null) {
    alert('Erro! Preencha todos os campos');
  } else if (guess == secretNumber) {
    // Se o palpite estiver correto, sai do loop
    break;
  } else {
    // Se o palpite estiver incorreto, fornece dicas
    if (guess > secretNumber) {
      alert(`O número secreto é menor que ${guess}`);
    } else {
      alert(`O número secreto é maior que ${guess}`);
    }
    // Incrementa o contador de tentativas
    attempts++;
  }
}

// Determina a forma correta da palavra "tentativa" dependendo do número de tentativas
let wordAttempt = attempts > 1 ? 'tentativas' : 'tentativa';
// Exibe uma mensagem de sucesso informando o número secreto e o número de tentativas
alert(`Muito bem! Você acertou o número secreto é ${secretNumber} com ${attempts} ${wordAttempt}.`);
