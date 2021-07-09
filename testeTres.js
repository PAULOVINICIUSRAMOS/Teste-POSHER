/*  Teste 3
Dado um array de strings não vazio, retorna um array de booleans indicando se a string é ou não um palíndromo.

public boolean[] verifyPalindromes(String[] values

Exemplo entrada
verifyPalindromes(new String[]{"arara", "jabuticaba", "asa", "caminhao"})
Exemplo saída
[true, false, true, false] */

const values = ["arara", "jabuticaba", "asa", "caminhao"];
const checkPalindrome = values => values === values.split('').reverse().join('');
const resultados = values.map(checkPalindrome);

console.log(resultados);
