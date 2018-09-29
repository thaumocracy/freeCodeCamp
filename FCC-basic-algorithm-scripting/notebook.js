function convertToF(celsius) {
    return celsius * 9 / 5 + 32;
}


function reverseString(str) {
    let arr = str.split('').reverse().join('');
    return arr;
}


function factorialize(num) {
    if(num === 0){ 
      return 1
      }
    return num * factorialize(num-1);
  }
  

function findLongestWordLength(str) {
let array = str.split(' ');
let word = ''
for(let i = 0;i < array.length;i++){
    if(array[i].length > word.length){
    word = array[i];
    }
}
return word.length;
}


function largestOfFour(arr) {
    let array = [];
    for(let i = 0;i < arr.length;i++){
      array.push(Math.max(...arr[i]));
    }
    return array;
  }


function confirmEnding(str, target) {
// "Never give up and good luck will find you."
// -- Falcor

return str.slice(str.length - target.length) === target;
}

function repeatStringNumTimes(str, num) {
// repeat after me
let word = '';
    if(num > 0){
        for(let i = 0; i < num;i++){
            word += str;
        }
    }  
return word;
}

function truncateString(str, num) {
    // Clear out that junk in your trunk
    let truncate = str.split('').slice(0,num).join('');
    return num >= str.length ? str : truncate + "..."
  }
