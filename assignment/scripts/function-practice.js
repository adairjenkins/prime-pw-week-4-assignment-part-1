console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('1. Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('2. Test - should say "Hello, Sasha!"', helloName('Sasha'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

console.log('3. Test - should return 5', addNumbers(3 ,2));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1 * num2 * num3;
}

console.log('4. Test - should return 24', multiplyThree(2, 3, 4));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    else return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( '5. isPositive - should say true', isPositive(3) );
console.log( '5. isPositive - should say false', isPositive(0) );
console.log( '5. isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length-1];
}

console.log('6. Test - should return "penguin"', getLast(['horse', 'monkey', 'ox', 'penguin']));
console.log('6. Test - should return "undefined"', getLast([]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return true;
    }
  }
  return false;
}

console.log('7. Test - should return "true"', find(3, [2, 4, 1, 3, 9]));
console.log('7. Test - should return "false"', find(3, [2, 4, 1, 12, 9]));
console.log('7. Test - should return "false"', find(3, []));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return letter == string.charAt(0);
}
console.log( '8. isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( '8. isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0

  for (let i=0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

console.log('9. Test - should return "45"', sumAll([10, 9, 8, 7, 6, 5]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function findPositiveNums ( array ) {
  let positiveNums = [];

  for (let i=0; i<array.length; i++) {
    if (array[i] > 0) {
      positiveNums.push(array[i]);
    }
  }

  return positiveNums
}

console.log('10. Test - should return "[4, 10]"', findPositiveNums([4, -3, 10, 0]));
console.log('10. Test - should return "[]"', findPositiveNums([-4, -3, -10, 0]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Create a n x n multiplication table, of size n provided in parameter

function multiplicationTable(n) {
  let table = [];

  for (let i=0; i <= n; i++) {
    table.push([]);
    table[i].push( new Array(n));

    for (let j=0; j <= n; j++) {
      table [i][j] = (i * j);
    }
  }
  return table;
}

console.log('11. Test 5 x 5 multiplication table')
console.table(multiplicationTable(5));
