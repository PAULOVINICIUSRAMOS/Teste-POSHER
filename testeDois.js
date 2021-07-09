/*Dado um array de strings não vazio, remove os dados duplicados em sequência.

public String[] removeDuplicates(String[] values)
Exemplo entrada
removeDuplicates(new String[]{"g", "g", "y", "c", "c", "c", "q", "c", "y", "y"})
Exemplo saída
["g", "y", "c", "q", "c", "y"]*/

const values = ["g", "g", "y", "c", "c", "c", "q", "c", "y", "y"];
const duplicate = [];

function removeDuplicates(values){
  let position = 0;
  
  values.map(value => {
    if(value != position){
      duplicate.push(value);
    }
    position = value;

  })
  
  return duplicate;
}

console.log(removeDuplicates(values));



