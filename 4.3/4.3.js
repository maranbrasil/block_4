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
