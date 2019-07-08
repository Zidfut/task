function memoize(x) {
  let z;
  return function(y) {
    console.log(x());
    return y;
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
