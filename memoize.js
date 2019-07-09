function memoize(x) {
  let cache = {};
  return function(y) {
    if (y in cache) {
    } else {
      cache[y] = x();
    }
    return cache[y];
  };
}

let counter = 1;
let obj = {};

function foo() {
  counter += 1;
  return counter;
}

const memoizedFoo = memoize(foo);

console.log(memoizedFoo(obj));
console.log(memoizedFoo(5));
console.log(memoizedFoo(5));
console.log(memoizedFoo(obj));
console.log(memoizedFoo(4));
