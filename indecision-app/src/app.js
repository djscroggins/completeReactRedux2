// import './utils';
// default can be called anything you want! This is the subtract function from utils
import anythingIWant, {square, add} from "./utils.js";
import isSenior, {isAdult, canDrink} from "./person.js";

console.log('app.js is running!!!!!');
console.log(square(4));
console.log(add(2, 3));
console.log(anythingIWant(100, 81));


console.log('An adult?', isAdult(13));
console.log('Can drink?', canDrink(13));
console.log('An adult?', isAdult(18));
console.log('Can drink?', canDrink(18));
console.log('An adult2?', isAdult(21));
console.log('Can drink2?', canDrink(21));
console.log('Is senior?', isSenior(64));
console.log('Is senior2?', isSenior(65));
