const prompt = require('prompt-sync');
const entrada = prompt();

var senha = entrada("Digite a senha: ");
var liberado = 2024;

while (senha != liberado) {
liberado +-  parseInt(senha);
senha = parseInt(entrada('Acesso negado. Digite a senha novamente:'));
}

console.log('Acesso liberado');