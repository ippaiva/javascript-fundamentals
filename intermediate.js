// // this function accepts an array of numbers
// // and returns an array of only the odd numbers
// // ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  const odds = array.filter(function (valor) {
    return valor % 2 !== 0;
  });
  return odds;
}
returnOdds([1, 2, 3, 4, 5, 6, 7]);

// // this function accepts an array of numbers
// // and returns an array of only the even numbers
// // ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  const evens = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    }
  }
  return evens;
}
returnEvens([1, 2, 3, 4, 5, 6, 7]);

returns only the max element from the inputted array of numbers
ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  let max = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
findMax([1, 25, 6, 3]);
/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
    let str = string.slice(1, 6)
    return str;
    
  //return string.trim();
}
trim(' hello ');
