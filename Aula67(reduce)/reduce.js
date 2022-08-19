// Reduce arrays

/**
 * O 'reduce' é comumente utilizado para reduzir arrays em um único elemento, 
 * porém por sua versatilidade, além do próprio 'reduce' ele pode ser também 
 * utilizado para 'filter' e 'map', apesar de não ser recomendável.
 */
const numbers = [5, 50, 80, 4, 7, 13, 91, 9, 15, 44, 56, 1, 77];

// Soma todos os números (reduce)
const total = numbers.reduce(function(accumulator, value, index, array) {
    accumulator += value;
    console.log(accumulator, value);
    return accumulator;
}, 0); // Valor inicial do acumulador
console.log(`Valor total: ${total}`);

// Retorna um array com os valores pares (filter)
const evenNumbers = numbers.reduce(function(accumulator, value, index, array) {
    if (value % 2 === 0) accumulator.push(value);
    return accumulator;
}, []); // Valor inicial do acumulador
console.log(`Array de pares: ${evenNumbers}`);

// Retorna um array com o dobro dos valores (map)
const doubleValues = numbers.reduce(function(accumulator, value, index, array) {
    accumulator.push(value*2);
    return accumulator;
}, []); // Valor inicial do acumulador
console.log(`Array de dobros: ${doubleValues}`);


// ===========================================================================================
const personas = [
    { name: 'Luiz', age: 62 }, 
    { name: 'Maria', age: 23 }, 
    { name: 'Eduardo', age: 55 }, 
    { name: 'Letícia', age: 19 }, 
    { name: 'Rosana', age: 32 }, 
    { name: 'Rongo', age: 47 }, 
]; 

// Retorna a pessoa mais velha
const older = personas.reduce(function(accumulator, value){
    if (accumulator.age > value.age) return accumulator;
    return value;
});
console.log(older);
