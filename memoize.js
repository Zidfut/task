"use strict";

function memoize(x) {
  let cache = {};

  String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length === 0) {
      return hash;
    }
    for (var i = 0; i < this.length; i++) {
      let char = this.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash;
  };

  return function(y) {
    if ((typeof y === "object" && y != null) || Array.isArray(y)) {
      y = JSON.stringify(y).hashCode();
    }
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
