let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index])
}


//Exercise 2
let numberSum = 0;

for (index = 0; index < numbers.length; index += 1) {
  numberSum = numberSum += numbers [index];
} 
  console.log(numberSum)

//Exercise 3
console.log(numberSum / numbers.length)

//Exercise 4
if ((numberSum / numbers.length) > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

//Exercise 5
//for (index = 0; index < numbers.length; index += 1) {

//Exercise 6
let oddNumber = 0;

for (indexOdd=0; indexOdd < numbers.length; indexOdd += 1) {
  checkOdd = numbers[indexOdd] % 2
  if (checkOdd === 1) {
    oddNumber = oddNumber += 1
  }
}
 if (oddNumber === 0) {
   console.log('Nenhum valor ímpar encontrado')
 } else {
   console.log(oddNumber)
 }

 //Exercise 7


 //Exercise 8
let array = [];

for (countArray = 1; countArray < 26; countArray = countArray +1) {
  array.push (countArray);
  }
console.log(array);

//Exercise 9

let result = 0;
let array2 = [];

for (divIndex = 0; divIndex < array.length; divIndex = divIndex += 1) {
  result = array [divIndex] / 2
  array2.push (result)
}
console.log(array2);
