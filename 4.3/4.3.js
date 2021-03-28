//Exersise 1
let n = 2;
lineStars = [];

for (let index_2 = 0; index_2 < n; index_2 += 1) {
  lineStars = lineStars + '*';
}

for (let index = 0; index < n; index = index += 1) {
  console.log(lineStars);
}

console.log();
console.log();

//Exercise 2

let n2 = 8;
let inputLine = '';

for (let index = 0; index <= n2; index = index += 1) {
  console.log(inputLine);
  inputLine = inputLine + '*';
}

// Exercise 3

let n3 = 8;
let inputPosition = n3;
let inputLine3 = '';


for (let lineIndex = 0; lineIndex < n3; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n3; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine3 = inputLine3 + ' '; 
    } else {
      inputLine3 = inputLine3 + '*';
    }
  }
  console.log(inputLine3)
  inputLine3 = '';
  inputPosition = inputPosition -= 1;
}

// Exercise 4
//Make a Pyramid using n asterisks

console.log ('  *  ');
console.log (' *** ');
console.log ('*****');

let pyramidBase = 9;
let symbol = '*';
let inputLine4 = '';

let midOfBase = (pyramidBase + 1) / 2
let controlLeft = midOfBase
let controlRight = midOfBase

if ((pyramidBase % 2) != 1) {
  //please put an odd number for pyramid base.
  console.log('Please put an odd number as a base')
} else {
  //make a pyramid
    for (let baseIndex = 0; baseIndex < pyramidBase; baseIndex += 2) {
      for (let fillIndex = 0; fillIndex <= pyramidBase; fillIndex += 1) {
        if (fillIndex >= controlLeft && fillIndex <= controlRight) {
          inputLine4 = inputLine4 + symbol;
        } else {
          inputLine4 = inputLine4 + ' ';
        }
      }
      console.log(inputLine4);
      inputLine4 = '';
      controlRight += 1;
      controlLeft -= 1;
    }
      
}