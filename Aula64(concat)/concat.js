// Concatenar elementos do array

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = a1.concat(a2); // 'a3' recebe concat de 'a1' com 'a2'
console.log(a3);

// É possível concatenar ao mesmo tempo que adiciona elementos
const a4 = a1.concat(a2, [7, 8, 9], 'Kayne');
console.log(a4);

// É possivel concatenar elementos com o comando 'spread'...
const a5 = [...a1, ...a2];
console.log(a5);

// ...e adicionar elementos da forma necessária
const a6 = [...a1, 'Kayne', ...a2, [7, 8, 9]];
console.log(a6);
/**
 * Nesse caso, percebe-se que o ultimo elemento foi adicionado como um
 * array literal. Caso queira adicionar apenas os elementos dentro das chaves,
 * basta utilizar o 'spread'.
 */
const a7 = [...a1, 'Kayne', ...a2, ...[7, 8, 9]];
console.log(a7);
