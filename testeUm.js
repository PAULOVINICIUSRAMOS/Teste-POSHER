/*Teste 1
Dado dois arrays de inteiros não vazios, determine se os valores do segundo array estão na mesma ordem no primeiro array.

public boolean isSubsequent(int[] values, int[] sequence)

Exemplo entrada
isSubsequent(new int[]{5, 1, 22, 25, 6, -1, 8, 10}, new int[]{1, 6, -1, 10})
Exemplo saída
true
*/

const values = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

function isSubsequent(values, sequence) {
	var filtered = values.filter(item => sequence.includes(item));
	return filtered.toString() === sequence.toString();
}

alert(isSubsequent(values, sequence));


