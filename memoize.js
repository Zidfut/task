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

  function equalSimple(x, y) {
    if (Array.isArray(x) && Array.isArray(y)) {
      if (x.length !== y.length) {
        return false;
      }
    }

    if (!(x instanceof Object && y instanceof Object)) {
      return false;
    }

    if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
      return false;
    }

    if (x.constructor !== y.constructor) {
      return false;
    }

    if (x.prototype !== y.prototype) {
      return false;
    }

    for (let p in x) {
      if (typeof x[p] !== typeof y[p]) {
        return false;
      }

      if (Object.keys(x).length !== Object.keys(y).length) {
        return false;
      }

      if (x.hasOwnProperty(p) !== y.hasOwnProperty(p)) {
        return false;
      }

      switch (typeof x[p]) {
        case "object":
          if (!equalSimple(x[p], y[p])) {
            return false;
          }
          break;
        case "function":
          if (
            typeof y[p] == "undefined" ||
            x[p].toString() != y[p].toString()
          ) {
            return false;
          }
          break;
        default:
          if (x[p] != y[p]) {
            return false;
          }
      }
    }

    return true;
  }

  return function(y) {
    let z;
    if (Array.isArray(y) || (typeof y === "object" && y != null)) {
      z = JSON.stringify(y).hashCode();
      if (z in cache) {
        if (equalSimple(cache[z].obj, y)) {
          return cache[z].count;
        }
      } else {
        cache[z] = {
          obj: y,
          count: x()
        };
        return cache[z].count;
      }
    } else {
      if (y in cache) {
        return cache[y];
      } else {
        cache[y] = x();
        return cache[y];
      }
    }
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
