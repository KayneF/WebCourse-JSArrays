// Filter + Map + Reduce (Reduzido)

// Retorna a soma do dobro de todos os pares
const numbers = [5, 50, 80, 4, 7, 13, 91, 9, 15, 44, 56, 1, 77];
const sumEvenNumbers = numbers
    .filter((value) => value % 2 === 0) // Filtra os pares
    .map((value) => value * 2) // Dobra os valores
    .reduce((accumulator, value) => accumulator += value // Reduz o array
    ); 

console.log(`Soma dos valores: ${sumEvenNumbers}`);
