let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = 1;

console.log(menu[menuServices]);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Contato')
console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {;
  console.log(groceryList[index]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let names1 of names) {
  console.log (names1)
}