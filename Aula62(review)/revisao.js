// Revisão em arrays
// Lembrando que arrays são passados como referência quando jogados em uma nova variável
// ==========================================================================
let names = ['Eduardo', 'Maria', 'João'];
names[2] = 'Joana'; // Alterando index 2
console.log(names);

delete names[1]; // Apaga o item mantendo o índice
console.log(names);
console.log('Next...');

// ==========================================================================
names = ['Eduardo', 'Maria', 'João'];
const namesReference = names; // Referenciando um array em uma nova variável
names[3] = 'Joana'; // Referência feita antes da alteração
console.log('Original:', names);
console.log('Referência:', namesReference);
console.log('Next...');

// ==========================================================================
names = ['Eduardo', 'Maria', 'João'];
const namesCopy = [...names]; // Copiando um array com 'spread' em uma nova variável
names[3] = 'Joana'; // Cópia feita antes da alteração
console.log('Original:', names);
console.log('Copia:', namesCopy);
console.log('Next...');

// ==========================================================================
// Arrays também podem ser criados da seguinte forma
const newNames = new Array('Eduardo', 'Maria', 'João');

newNames.push('Joelma'); // Adiciona elemento no fim do array
console.log('push:', newNames);
newNames.pop(); // Remove ultimo elemento do array
console.log('pop:',newNames);
newNames.unshift('Joelma'); // Adiciona elemento no início do array
console.log('unshift:',newNames);
newNames.shift('Joelma'); // Remove primeiro elemento do array
console.log('shift:',newNames);

newNames.push('Jubileu');
newNames.push('Eustácio');
console.log(newNames);
const sliced = newNames.slice(3, 5); // Recorta elementos dentro de um escopo...
console.log(sliced); // ...e joga dentro de uma nova variável
console.log(newNames); // Repare que o array continua intacto
/**
 * É possível definir um escopo mais amplo de uma forma diferente, para isso, 
 * basta utilizar o valor do índice inicial e um valor negativo, o qual
 * representará aonde será o fim do corte. Ex: (3, -2) representa que os 2 
 * ultimos elementos da lista serão mantidos, assim como os elementos 0, 1 e 2
 * que foram excluídos do índice.
 */
const sliced2 = newNames.slice(1, -2);
console.log(sliced2);
console.log(newNames);

console.log('Next...');

/**
 * É possível guardar os elementos adicionados/removidos do array em uma
 * variável para possível utilização.
 */
const removedName = newNames.pop();
console.log(removedName);
console.log(newNames);
console.log('Next...');

// ==========================================================================
/**
 * Também é possível converter textos ou frases inteiras, quebrar em partes,
 * e alocar em um array. Para isso é necessário algum tipo de elemento em 
 * comum que servirá como um separador, nesse caso, usaremos os espaços.
 * Da mesma forma, é possível unir arrays em frases e textos.
 */
const fullName = 'Kayne Eustacio Jubileu Colombo';
const brokenString = fullName.split(' '); // Quebra texto em partes
console.log(fullName);
console.log(brokenString);
console.log(brokenString[2]);

const joinedString = brokenString.join(' '); // Une array em uma string
console.log(joinedString);
