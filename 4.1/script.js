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
var a1 = 120;
var a2 = 50;
var a3 = 10;

if (a1 <= 0 || a2 <= 0 || a3 <=0){
  console.log("Invalid angle");
} else if (a1 + a2 + a3 === 180) {
  console.log("It's a triangle!");
} else {
  console.log("It isn't a triangle!");
}
