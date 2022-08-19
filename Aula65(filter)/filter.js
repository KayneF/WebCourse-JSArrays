// Array Filters

/**
 * Filters sempre retorna um array com a mesma quantidade de elementos ou menos.
 */
const numbers = [5, 50, 80, 4, 7, 13, 91, 9, 15, 44, 56, 1, 77];

// Retornar valores maiores que 10
const filteredNumbers = numbers.filter(callbackFilter); // Arrow function simplificada

function callbackFilter(value, index, array) { // Parâmetros "valor, índice e array completo"
    console.log(value);
    if (value > 10) { return true; }
}
console.log(filteredNumbers);


// Simplificado
const filteredNumbers2 = numbers.filter(value => value > 10); // Arrow function simplificada (return implícito)
console.log(filteredNumbers2);


// ===========================================================================================
const personas = [
    { name: 'Luiz', age: 62 }, 
    { name: 'Maria', age: 23 }, 
    { name: 'Eduardo', age: 55 }, 
    { name: 'Letícia', age: 19 }, 
    { name: 'Rosana', age: 32 }, 
    { name: 'Rongo', age: 47 }, 
]; 

// Retorna pessoas que tem o nome com mais de 5 letras
const biggerNames = personas.filter(value => value.name.length > 5);
console.log(biggerNames);

// Retorna pessoas com mais de 50 anos
const olderPersonas = personas.filter(value => value.age > 50);
console.log(olderPersonas);

// Retorna pessoas cujo nome termina com 'a'
const aNames = personas.filter(value => value.name.toLowerCase().endsWith('a'));
console.log(aNames);
