"use strict"

function equalSimple (x, y) {

  if (Object.keys(x).length !== Object.keys(y).length) {
    return false
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

    if(typeof x[p] !== typeof y[p]){
      return false
    }

    if (x.hasOwnProperty(p) !== y.hasOwnProperty(p)) {
      return false
    }

    switch (typeof (x[p])) {
      case 'object':
        if (!equalSimple(x[p], y[p])){
           return false
        }
        break;
      case 'function':
        if (typeof (y[p]) == 'undefined' || (x[p].toString() != y[p].toString())){
          return false
        }
        break;
      default:
        if (x[p] != y[p]){
          return false
        } 
    }
  }
 
  return true;

}

equalSimple(
  {
    a: 2,
    b: "2",
    c: false,
    g: [
      {a: {j: undefined}},
      {a: 2, b: "2", c: false, g: [{a: {j: undefined}}]}
    ]
  },
  {
    a: 2,
    b: "2",
    c: false,
    g: [
      {a: {j: undefined}},
      {a: 2, b: "2", c: false, g: [{a: {j: undefined}}]}
    ]
  }
)