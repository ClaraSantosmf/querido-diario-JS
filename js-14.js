
const anoDeNascimento = parseInt(prompt("Informe o ano de seu nascimento"));
const ano = new Date().getFullYear();

if (!isNaN(anoDeNascimento)) {
  Idade = 'Sua idade atual é ' + (ano - anoDeNascimento) + ' anos.';
}