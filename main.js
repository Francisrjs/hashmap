import Hashmap from "./hashmap.js"
const test = new Hashmap() // or HashMap() if using a factory

console.log("1-SET: apple color red");
test.set('apple', 'red')
console.log(test.get('apple'));

console.log("2-CHANGE:Set apple color orange");
test.set('apple', 'orange');
console.log(test.get('apple'));

console.log("keys:", test.length());
console.log("3-EXPAND to capacity 32");
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
test.set('cat', 'golden');
test.set('turtle', 'green');

console.log("4-GET apple color=",test.get('apple'));

console.log("5-TEST:has(apple)= ",test.has('apple'));
console.log("5-TEST:has(elefant)= ",test.has('elefant'));

console.log("6-TEST:remove(apple) ");
test.remove('apple')
console.log("6-TEST:has(apple)= ",test.has('apple'));
console.log("Initial capacity:", test.length());

for (let i = 0; i < 15; i++) {
  test.set(`key${i}`, `value${i}`);
}

console.log("7-keys count:",test.length())

//console.log("8-Clear",test.clear())
console.log("8-keys count:",test.length())
console.log("9-keys:")
console.log(test.keys())
console.log(test.values())
console.log(test.entries())