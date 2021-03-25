let a = 10;
let b = 15;

console.log("Soma = ", a + b);

console.log ("Subtração = ", a - b);

console.log ("Multiplicação = ", a * b);

console.log ("Divisão = ", a / b);

console.log ("Módulo = ", a % b );

/* Exercise 2 */
if (a > b) {
  console.log(a, "é maior que", b);
} else {
  console.log(b, "é maior que", a);
}

/* Exercise 3 */
let c = 500;
let d = 50;
let e = 35;

if (c > d && c > e) {
  console.log(c,"é maior numero dos três");
} else if (d > c && d > e) {
  console.log(d,"é maior numero dos três");
} else {
  console.log(e,"é maior numero dos três");
}

/* Exercise 4 */

if (a>0) {
  console.log('Positive number');
} else if (a < 0) {
  console.log('Negative number');
}else {
  console.log('Zero');
}

/* Exercise 5 */

let a1 = 120;
let a2 = 50;
let a3 = 10;

if (a1 <= 0 || a2 <= 0 || a3 <=0){
  console.log("Invalid angle");
} else if (a1 + a2 + a3 === 180) {
  console.log("It's a triangle!");
} else {
  console.log("It isn't a triangle!");
}

/* Exercise 6 */

let chessPiece = "King";
let chessPieceLower = chessPiece.toLowerCase();

switch (chessPieceLower) {
  case 'bishop':
    console.log('bishop -> diagonal');
    break;
  case 'king':
    console.log('king -> vertically/horizontally');
    break;
  case 'rook':
    console.log('rook -> 1 square, any direction');
    break;
  case 'queen':
    console.log('queen -> any direction');
    break;
  case 'pawn':
    console.log('pawn -> 1 square, diagonal');
    break;
    case 'knight':
      console.log('knight -> L movement');
      break;
  default:
    console.log('invalid chess piece');
}

/* Exercise 7 */
let grade2 = 65;

if (grade2 < 0 || grade2 >100) {
  console.log('Erro!')
} else if (grade2 > 90) {
  console.log('A');
} else if (grade2 > 80) {
  console.log('B');
} else if (grade2 > 70) {
  console.log('C');
} else if (grade2 > 60) {
  console.log('D');
} else if (grade2 > 50) {
  console.log('E');
} else {
  console.log('F');
}

/* Exercise 8 */
let ex8_1 = 7;
let ex8_2 = 5;
let ex8_3 = 3;

if (ex8_1 % 2 === 0 || ex8_2 % 2 === 0 || ex8_3 % 2 === 0) {
  console.log('There is one or more than a even number');
} else {
  console.log('There is no even number');
}

/* Exercise 9 */
let ex9_1 = 7;
let ex9_2 = 5;
let ex9_3 = 3;

if (ex9_1 % 2 === 1 || ex9_2 % 2 === 1 || ex8_9 % 2 === 1) {
  console.log('True');
} else {
  console.log('False');
}

/* Exercise 10 */
let prodValue = 10;
let sellValue = 200;

if (prodValue < 0 || sellValue < 0) {
  console.log('Please, enter with a valid value');
} else {
  console.log((sellValue - prodValue - (0.2 * prodValue)) * 1000);
}

/* Exercise 11 */
let income = 3000;
let baseIncome = 0;
let netIncome = 0;

if (income < 1556.94) {
  baseIncome = income * 0.92;
  console.log(baseIncome);
  } else if (income < 2594.92) {
  baseIncome = income * 0.91;
  console.log(baseIncome);
  } else if (income < 5189.82) {
  baseIncome = income * 0.89;
  console.log(baseIncome); 
  } else {
  baseIncome = income - 570.88;
  console.log(baseIncome);
  }

  if (baseIncome < 1903.98) {
    console.log(baseIncome);
    } else if (baseIncome < 2826.64) {
    netIncome = baseIncome -((baseIncome * 0.075) - 142.80);
    console.log(netIncome);
    } else if (baseIncome < 3751.06) {
    netIncome = baseIncome -((baseIncome * 0.15) - 354.80);
    console.log(netIncome); 
    } else if (baseIncome < 4664.68) {
    netIncome = baseIncome -((baseIncome * 0.225) - 636.13);
    console.log(netIncome);
    } else {
    netIncome = baseIncome -((baseIncome * 0.27) - 869.36);
    console.log(netIncome);
    }