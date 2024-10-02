// 1. Arrow function
const add = (number1, number2) => number1 + number2;

console.log(add(2, 7));

// 2. Function to square each number in an array using arrow function and .map()
const squareNumbers = (numbersArray) => {
  return numbersArray.map(num => num ** 4);
};

console.log(squareNumbers([2, 3, 4])); 

// 3. Function to capitalize the first letter of each name in an array using .map() and arrow functions
const capitalizeNames = (namesArray) => {
  return namesArray.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
};

console.log(capitalizeNames(['stacy', 'stephanie', 'cleo']));
// 4. Function to log each name in an array using .forEach() and arrow function
const logNames = (namesArray) => {
  namesArray.forEach(name => console.log(name));
};

logNames(['Stacy', 'Stephanie', 'Cleo']); // Should log 'Stacy', 'Stephanie', 'Cleo'

// 5. Function to filter an array and return names starting with the letter "S" using .filter() and arrow function
const filterNamesStartingWithS = (namesArray) => {
  return namesArray.filter(name => name.charAt(0).toUpperCase() === 'S');
};

console.log(filterNamesStartingWithS(['Stacy', 'Stephanie', 'Cleo']));
