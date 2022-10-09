// Filter + Map + Reduce

const numbers = [5, 50, 80, 4, 7, 13, 91, 9, 15, 44, 56, 1, 77];

// Retorna a soma do dobro de todos os pares
//  -> Filtra os pares
const evenNumbers = numbers.filter(function(value, index, array){
    return (value % 2 === 0);
});
console.log(`Valores pares: ${evenNumbers}`);

//  -> Dobra os valores
const doubleValues = evenNumbers.map(function(value, index, array) {
    return value * 2;
});
console.log(`Valores dobrados: ${doubleValues}`);

//  -> Reduz o array
const sum = doubleValues.reduce(function(accumulator, value, index, array) {
    return accumulator += value;
}, 0);
console.log(`Soma dos valores: ${sum}`);
