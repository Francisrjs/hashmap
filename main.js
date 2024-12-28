import Hashmap from "./hashmap.js"
const test = new Hashmap() // or HashMap() if using a factory
test.set('apple', 'red')
test.set('applo', 'orange')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log("hola");
console.log(test.get('apple'));
console.log(test.get('applo'));
console.log(test.get('kite'));