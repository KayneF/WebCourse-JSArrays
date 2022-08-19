// Splice

const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

/**
 * Removendo elementos do array.
 * O primeiro valor representa o index 0 que será removido, e o segundo
 * elemento, representa quantos elementos serão removidos na seqência.
 * */ 
// const variable = array.splice(index, elementsToDelete);
const removed = names.splice(3, 2); // Remove 2 elementos a partir do index 3

console.log(names);
console.log(removed);
console.log();

// ==========================================================================

const names2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

/**
 * Em arrays, números negativos sãoo utilizados para remover elementos
 * de trás para frente, ou seja, começando do ultimo elemento e seguindo
 * de forma decrescente, onde '-1' representa a última posição, '-2' a 
 * penúltima, e assim sucessivamente.
 */
// const variable = array.splice(index, elementsToDelete);
const removed2 = names2.splice(-2, 2); // Remove 2 elementos a partir do index -2

console.log(names2);
console.log(removed2);

// =========================================================================

const names3 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

/**
 * É possível adicionar elementos com o comando 'splice'.
 * Nesse exemplo, será adicionado o nome 'Luiz'.
 * O valor '3' representa o índice, que é onde será inserido o elemento.
 * O valor '0' representa que zero elementos serã excluídos, e o valor
 * 'Luiz' representa o valor que será inserido na posição apontada.
 * Ou seja, será inserido o nome 'Luiz' na posição 3 do array, e nenhum
 * elemento será removido.
 */

//Remove '2' elementos a partir do index '3', e adiciona os elementos apontados
// const variable = array.splice(index, elementsToDelete, element1, element2...);
const removed3 = names3.splice(3, 2, 'Luiz', 'David', 'Humberto'); 

console.log(names3);
console.log(removed3);

// [ 'Maria', 'João', 'Eduardo', 'Luiz', 'David', 'Humberto' ]

names3.splice(-1, 1); // Mesmo que comando 'pop()'
names3.splice(0, 1); // Mesmo que comando 'shift()'
// const variable = array.splice(index, elementsToDelete, element1, element2...);
names3.splice(names3.length, 0, 'Rongo', 'Miura'); // Mesmo que comando 'push()'
names3.splice(0, 0, 'Brabus', 'Tarço'); // Mesmo que comando 'unshift()'
/**
 * Em alguns casos, é mais viável utilizar o splice, como por exemplo quando
 * temos mais de um elemento para ser adicionado ou removido. Mas para tarefas
 * mais simples, ainda é recomendado os comandos mencionados anteriormente.
 */

console.log(names3);
