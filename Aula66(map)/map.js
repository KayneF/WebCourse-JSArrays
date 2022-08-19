// Maps

/**
* Diferente de 'filter', o map não altera o tamanho do array, e aqui, 
* pode se utilizar os valores do array original para criar um novo array.
*/
const numbers = [5, 50, 80, 4, 7, 13, 91, 9, 15, 44, 56, 1, 77];
const doubleValues = numbers.map(names => names*2);
console.log(doubleValues);


 // ===========================================================================================
const personas = [
    { name: 'Luiz', age: 62 }, 
    { name: 'Maria', age: 23 }, 
    { name: 'Eduardo', age: 55 }, 
    { name: 'Letícia', age: 19 }, 
    { name: 'Rosana', age: 32 }, 
    { name: 'Rongo', age: 47 }, 
]; 

// Retorna apenas uma string com o nome da pessoa
const names = personas.map(obj => obj.name);
console.log(names);

// Remove a chave "name" do objeto
const ages = personas.map(obj => ({age: obj.age}));
console.log(ages);

// Adiciona uma chave 'id' em cada objeto
const defPersonas = personas.map(function(obj, index) {
    obj.id = index+1;
    return obj;
});
console.log(defPersonas);

/**
 * Lembrando que objetos e arrays passam valores por referência,
 * ou seja, quando um objeto referenciado é alterado, o objeto
 * original, consequentemente o objeto original também é alterado.
 * Para mudar esse comportamento, uma das formas é utilizando o 'spread'.
 */
