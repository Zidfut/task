function equalSimple (x, y) {

  for (p in x) {

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