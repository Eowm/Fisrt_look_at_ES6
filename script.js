///// Task 1

const hello = 'Hello';
const world = 'World';
const helloWorld = `${hello} ${world}`;
console.log(helloWorld);


///// Task 2

const multiply =(x=1, y=1) => console.log(x*y);


///// Task 3

const average = (...args) => args.reduce((a, b) => a + b) / args.length;

average(1, 3, 6, 6);


///// Task 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);


///// Task 5

table = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = table;
console.log(`${firstName} ${lastName}`);



